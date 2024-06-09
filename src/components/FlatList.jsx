import { Box, CircularProgress, List } from "@mui/joy";
import { Fragment, FC } from "react";

const FlatList = (props) => {
  const {
    disableWrapper = false,
    data = [],
    renderItem,
    keyExtractor,
    ItemSeparatorComponent,
    ListEmptyComponent,
    ListFooterComponent,
    ListHeaderComponent,
    refreshing = false,
    horizontal = false,
    slotProps = {},
  } = props;

  const { wrapper, list } = slotProps;
  const { sx, ...restListProps } = list || {};

  const renderContent = () => {
    if (data.length === 0) {
      return ListEmptyComponent || null;
    }

    return data.map((item, index) => (
      <Fragment key={keyExtractor(item, index)}>
        {renderItem(item)}
        {index < data.length - 1 && ItemSeparatorComponent}
      </Fragment>
    ));
  };

  const ListWrapper = () => (
    <Box {...wrapper}>
      {ListHeaderComponent}
      <List
        sx={{
          display: "flex",
          flexDirection: horizontal ? "row" : "column",
          gap: 0.5,
          flexWrap: "wrap",
          ...sx,
        }}
        {...restListProps}
      >
        {renderContent()}
      </List>
      {refreshing && (
        <Box display="flex" justifyContent="center" my={2}>
          <CircularProgress />
        </Box>
      )}
      {ListFooterComponent}
    </Box>
  );

  return disableWrapper ? renderContent() : <ListWrapper />;
};

export default FlatList;
