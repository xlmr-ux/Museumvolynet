import { Fragment } from "react";
import { Box, List, CircularProgress } from "@mui/joy";

const SectionList = (props) => {
  const {
    disableWrapper = false,
    sections,
    keyExtractor,
    renderItem,
    renderSectionHeader,
    ItemSeparatorComponent,
    SectionSeparatorComponent,
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
    if (sections.length === 0) {
      return ListEmptyComponent || null;
    }

    return sections.map((section, sectionIndex) => (
      <Fragment key={`${section.title}-${sectionIndex}`}>
        {renderSectionHeader?.({ section })}

        {section.data.map((item, itemIndex) => (
          <Fragment key={keyExtractor(item, itemIndex)}>
            {renderItem({ item, index: itemIndex })}
            {itemIndex < section.data.length - 1 && ItemSeparatorComponent}
          </Fragment>
        ))}

        {sectionIndex < sections.length - 1 && SectionSeparatorComponent}
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
          gap: 1,
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

export default SectionList;
