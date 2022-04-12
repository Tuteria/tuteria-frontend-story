import { QuestionIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  GridProps,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputProps,
  NumberInputStepper,
  Select,
  SelectProps,
  Stack,
  Tooltip,
  useColorModeValue,
  useSafeLayoutEffect,
} from "@chakra-ui/react";
import * as React from "react";
import { useState } from "react";

interface GetFluidGridPropsOptions {
  items: number;
  maxColumns: number;
  width: number;
  gap: number;
  aspectRatio: number;
}

export const getFluidGridProps = (options: GetFluidGridPropsOptions) => {
  const { items, maxColumns, width, gap, aspectRatio } = options;
  const columns = Math.min(items, maxColumns);
  const rows = Math.ceil(items / columns);
  const itemWidth = (width - (columns - 1) * gap) / columns;
  const itemHeight = itemWidth / aspectRatio;
  return {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, ${itemHeight}px)`,
  };
};

export const GridItemWidthSelect = (props: SelectProps) => (
  <FormControl>
    <FormLabel>Min Width</FormLabel>
    <Select {...props}>
      <option value="240">240px</option>
      <option value="320">320px</option>
      <option value="400">400px</option>
    </Select>
  </FormControl>
);

export const GridItemNumberInput = (props: NumberInputProps) => (
  <FormControl>
    <HStack mb="2">
      <FormLabel margin="0">Items</FormLabel>
      <Tooltip
        label="The grid is designed to use as much space as possible, respecting the aspect ratio and minimum length of its children. If it is not possible to display all items in the viewport, a vertical scrollbar is displayed."
        fontSize="md"
      >
        <QuestionIcon />
      </Tooltip>
    </HStack>
    <NumberInput {...props}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  </FormControl>
);

export const GridItemAspectRatioSelect = (props: SelectProps) => (
  <FormControl>
    <FormLabel>Aspect Ratio</FormLabel>
    <Select {...props}>
      <option value={1}>1 / 1</option>
      <option value={4 / 3}>4 / 3</option>
      <option value={16 / 9}>16 / 9</option>
    </Select>
  </FormControl>
);

interface GetStaticGridPropsOptions {
  items: number;
  maxColumns: number;
  aspectRatio: number;
  width: number;
  height: number;
  gap: number;
}

export const getStaticGridProps = (options: GetStaticGridPropsOptions) => {
  const initialGridSize = {
    columns: 0,
    rows: 0,
    itemWidth: 0,
    itemHeight: 0,
    area: 0,
  };

  const gridSize = getSensibleNumberOfColumns(options).reduce(
    (prev, columns, _i, array) => {
      const curr = getGridSize({ ...options, columns });
      if (prev.area > curr.area) {
        array.splice(1);
        return prev;
      }
      return curr;
    },
    initialGridSize
  );

  const { itemWidth, itemHeight, rows, columns } = gridSize;
  return {
    gridTemplateColumns: `repeat(${columns}, ${itemWidth}px)`,
    gridTemplateRows: `repeat(${rows}, ${itemHeight}px)`,
    alignContent: "center",
  };
};

interface GetSensibleNumberOfColumnsOptions {
  items: number;
  maxColumns: number;
}

const getSensibleNumberOfColumns = (
  options: GetSensibleNumberOfColumnsOptions
) => {
  const { items, maxColumns } = options;
  const start = Math.max(1, Math.floor(Math.sqrt(items)) - 1);
  const end = Math.min(items, maxColumns) + 1;
  return Array.from(Array(end - start)).map((_, i) => i + start);
};

interface GetGridSizeOptions {
  items: number;
  columns: number;
  width: number;
  height: number;
  aspectRatio: number;
  gap: number;
}

export const getGridSize = (options: GetGridSizeOptions) => {
  const { items, columns, width, height, aspectRatio, gap } = options;
  const rows = Math.ceil(items / columns);
  const availableWidth = width - (columns - 1) * gap;
  const availableHeight = height - (rows - 1) * gap;
  const scaledToHeight =
    (columns / rows) * aspectRatio < availableWidth / availableHeight;
  const itemWidth = scaledToHeight
    ? Math.floor((availableHeight / rows) * aspectRatio)
    : Math.floor(availableWidth / columns);
  const itemHeight = Math.floor(itemWidth / aspectRatio);
  const area = itemWidth * itemHeight * items;
  return {
    columns,
    rows,
    itemWidth,
    itemHeight,
    area,
  };
};

/**
 * A very simpe resize observer hook.
 * For a more sophisticated solution have a look here:
 *
 * {@link https://github.com/streamich/react-use/blob/master/docs/useMeasure.md react-use}
 * {@link https://github.com/ZeeCoder/use-resize-observer use-resize-observer}
 */
export const useResizeObserver = <T extends HTMLElement>() => {
  const ref = React.useRef<T>(null);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  useSafeLayoutEffect(() => {
    if (ref.current) {
      const observer = new ResizeObserver(([entry]: ResizeObserverEntry[]) => {
        setWidth(entry.contentRect.width);
        setHeight(entry.contentRect.height);
      });
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [ref]);

  return { ref, height, width };
};

export const useGridConstraints = (
  parentWidth: number,
  parentHeight: number,
  minChildWidth: number,
  minChildHeight: number,
  gap = 0
) => {
  const [constraints, setConstraints] = React.useState({
    maxColumns: 0,
    maxRows: 0,
    maxItems: 0,
  });

  useSafeLayoutEffect(() => {
    const maxColumns = getMax(parentWidth, minChildWidth, gap);
    const maxRows = getMax(parentHeight, minChildHeight, gap);
    const maxItems = maxColumns * maxRows;
    setConstraints({ maxColumns, maxRows, maxItems });
  }, [parentWidth, parentHeight, minChildWidth, minChildHeight, gap]);

  return constraints;
};

export const getMax = (length: number, minLength: number, gap: number) =>
  length && minLength ? Math.floor((length + gap) / (minLength + gap)) : 0;

interface UseAspectRatioGridProps {
  aspectRatio: number;
  gap: number;
  items: number;
  minChildWidth: number;
}

export const useAspectRatioGrid = (options: UseAspectRatioGridProps) => {
  const { aspectRatio, items, gap, minChildWidth } = options;
  const minChildHeight = minChildWidth / aspectRatio;
  const { ref, width, height } = useResizeObserver<HTMLDivElement>();
  const [gridProps, setGridProps] = useState({});

  const { maxColumns, maxItems } = useGridConstraints(
    width,
    height,
    minChildWidth,
    minChildHeight,
    gap
  );

  useSafeLayoutEffect(() => {
    if (height && width && maxItems) {
      const gridProps =
        items > maxItems
          ? getFluidGridProps({ items, width, aspectRatio, gap, maxColumns })
          : getStaticGridProps({
              items,
              width,
              aspectRatio,
              gap,
              maxColumns,
              height,
            });
      setGridProps(gridProps);
    }
  }, [aspectRatio, gap, height, items, maxColumns, maxItems, width]);

  const defaultProps = {
    minWidth: minChildWidth,
    minHeight: minChildHeight,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    gap: `${gap}px`,
  };

  return { ref, aspectRatioGridProps: { ...defaultProps, ...gridProps } };
};

interface AspectRatioGridProps extends Omit<GridProps, "gap"> {
  aspectRatio: number;
  minChildWidth: number;
  gap?: number;
}

export const AspectRatioGrid = (props: AspectRatioGridProps) => {
  const { aspectRatio, minChildWidth, gap = 0, ...gridProps } = props;
  const items = React.Children.count(props.children);
  const { ref, aspectRatioGridProps } = useAspectRatioGrid({
    aspectRatio,
    items,
    gap,
    minChildWidth,
  });

  return <Grid ref={ref} {...gridProps} {...aspectRatioGridProps} />;
};

export const GridWithAspectRatio = () => {
  const [items, setItems] = React.useState(2);
  const [minWidth, setMinWidth] = React.useState(320);
  const [aspectRatio, setAspectRatio] = React.useState(16 / 9);

  const bgColor = useColorModeValue("blue.500", "blue.300");
  return (
    <Flex h="100vh" flexDirection="column">
      <Box minH="24" mx="auto" maxW={{ base: "full", md: "md" }}>
        <Stack
          direction="row"
          h="full"
          spacing="6"
          justifyContent="center"
          alignItems="center"
          p="2"
        >
          <GridItemNumberInput
            value={items}
            onChange={(_string, value) => setItems(isNaN(value) ? 0 : value)}
            min={0}
            max={50}
          />
          <GridItemWidthSelect
            value={minWidth}
            onChange={(e) => setMinWidth(Number.parseInt(e.target.value))}
          />
          <GridItemAspectRatioSelect
            value={aspectRatio}
            onChange={(e) => setAspectRatio(Number.parseFloat(e.target.value))}
          />
        </Stack>
      </Box>
      <Flex flex="1" overflowY="auto" minH="0">
        <AspectRatioGrid
          aspectRatio={aspectRatio}
          minChildWidth={minWidth}
          gap={1}
        >
          {Array.from(Array(items).keys()).map((_, i) => (
            <GridItem key={i}>
              <Box h="full" bg={bgColor} />
            </GridItem>
          ))}
        </AspectRatioGrid>
      </Flex>
    </Flex>
  );
};
