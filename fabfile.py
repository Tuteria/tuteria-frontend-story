import os
from fabric.api import local, run, cd, env, sudo, settings, lcd, prompt
from fabric.colors import red
from fabric.decorators import hosts

env.hosts = ["sama@tuteria.com"]

password = os.getenv("PRODUCTION_PASSWORD", "")


def update_images(scale=1, celery=False, callback=None):
    with settings(user="sama", password=password):
        with cd("/home/sama/tuteria"):
            sudo("docker-compose pull app")
            if callback:
                callback()
                pass
            else:
                sudo("docker-compose up -d --scale app={} app".format(scale))
                if celery:
                    sudo("docker-compose up -d --scale worker={} worker ".format(scale))
            sudo('docker rmi $(docker images --filter "dangling=true" -q --no-trunc)')
            # sudo('docker rmi $(docker images -a -q)')


def deploy_next(user="sama", password=password):
    with settings(user="sama", password=password):
        with cd("/home/sama/web_deploy"):
            run("docker-compose pull tutor-next")
            run("docker-compose up -d tutor-next")
            # run('docker-compose pull store-next')
            # run('docker-compose up -d store-next')
            run('docker rmi $(docker images --filter "dangling=true" -q --no-trunc)')


@hosts("sama@staging-prod.tuteria.com")
def deploy_staging():
    with cd("/home/sama/tuteria-codebase/tuteria-deploy"):
        run("docker-compose pull tutor-next request-next")
        run("docker-compose up -d tutor-next request-next")
    run('docker rmi $(docker images --filter "dangling=true" -q --no-trunc)')


@hosts("sama@staging-prod.tuteria.com")
def deploy_store():
    with cd("/home/sama/tuteria-codebase/tuteria-deploy"):
        run("docker-compose pull store-next")
        run("docker-compose up -d store-next")
    run('docker rmi $(docker images --filter "dangling=true" -q --no-trunc)')


@hosts("sama@tutor-search.tuteria.com")
def build_new_flow():
    with cd("/home/sama/tutor-frontend-app-v2"):
        run("git pull --no-edit")
        run("git checkout -f develop")
        # run('yarn install')
        # run('/home/sama/.nvm/versions/node/v8.9.4/bin/node build')
        run("docker login -u gbozee -p abiola2321 registry.gitlab.com")
        run(
            "docker build --no-cache -t registry.gitlab.com/tuteria/v2/tutor-frontend-app/tutor-application:latest ."
        )
        run(
            "docker push registry.gitlab.com/tuteria/v2/tutor-frontend-app/tutor-application:latest"
        )
    run('docker rmi $(docker images --filter "dangling=true" -q --no-trunc)')


def tag_shared_lib(is_test=False, branch="origin"):
    with lcd("$PWD/packages/shared_lib"):
        if is_test:
            create_tag = prompt("Tag this release? [y/N] ")
            if create_tag.lower() == "y":
                local("git tag | sort -V | tail -5")
                refspec = prompt("Tag name [in format x.x.x]? ")
                local(
                    'git tag %(ref)s -m "Tagging version %(ref)s in fabfile"'
                    % {"ref": refspec}
                )
                local("git push %(branch)s --tags" % {"branch": branch})
            else:
                use_commit = prompt("Build from a specific commit? [y/N] ")
                if use_commit.lower() == "y":
                    refspec = prompt("Choose commit to build from: ")
                else:
                    branch = local(
                        'git branch | grep "^*" | cut -d" " -f2', capture=True
                    )
                    refspec = local("git describe %s" % branch, capture=True).strip()
        else:
            # An existing tag must be specified
            local("git tag | sort -V | tail -5")
            refspec = prompt(red("Choose tag to build from: "))

            # Check this is valid
            local('git tag | grep "%s"' % refspec)

        return refspec


@hosts("sama@tutor-search.tuteria.com")
def build_tuteria_cdn(branch="master"):
    with cd("/home/sama/tuteria_cdn"):
        run("git pull --no-edit")
        run("git checkout -f {}".format(branch))
        # run('yarn install')
        # run('/home/sama/.nvm/versions/node/v8.9.4/bin/node build')
        run("docker login -u gbozee -p abiola2321 registry.gitlab.com")
        run(
            "docker build --no-cache -t registry.gitlab.com/tuteria/v2/cdn/tuteria-cdn:latest ."
        )
        run("docker push registry.gitlab.com/tuteria/v2/cdn/tuteria-cdn:latest")
    run('docker rmi $(docker images --filter "dangling=true" -q --no-trunc)')


@hosts("sama@tutor-search.tuteria.com")
def deploy_cdn():
    with cd("/home/sama/web_deploy"):
        run("docker-compose pull cdn-next")
        run("docker-compose up -d cdn-next")
    run('docker rmi $(docker images --filter "dangling=true" -q --no-trunc)')

@hosts("sama@tutor-search.tuteria.com")
def build_request_flow():
    with cd("/home/sama/home-tutoring-application"):
        run("git pull --no-edit")
        run("git checkout -f develop")
        # run('yarn install')
        # run('/home/sama/.nvm/versions/node/v8.9.4/bin/node build')
        run("docker login -u gbozee -p abiola2321 registry.gitlab.com")
        run(
            "docker build --no-cache -t registry.gitlab.com/tuteria/v2/home-tutoring-application:latest ."
        )
        run("docker push registry.gitlab.com/tuteria/v2/home-tutoring-application:latest")
    run('docker rmi $(docker images --filter "dangling=true" -q --no-trunc)')

@hosts("sama@tutor-search.tuteria.com")
def build_notification_flow():
    with cd("/home/sama/notification-service"):
        run("git pull --no-edit")
        run("git checkout -f master")
        # run('yarn install')
        # run('/home/sama/.nvm/versions/node/v8.9.4/bin/node build')
        run("docker login -u gbozee -p abiola2321 registry.gitlab.com")
        run(
            "docker build --no-cache -t registry.gitlab.com/tuteria/notification-service:aws ."
        )
        run("docker push registry.gitlab.com/tuteria/notification-service:aws")
    run('docker rmi $(docker images --filter "dangling=true" -q --no-trunc)')