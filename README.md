## React Banking App
Folder structure:
- src/assets: images, icons and other resources
- src/components/<feature-name>: React components, each to it's own directory, folder structure
should reflect the feature they compose, eg.: transaction/summary/list/item/TransactionSummaryListItem.js
(can be shorter for convenience's sake)
- src/components/UI: general purpose components, like a button or a widget used in multiple features
- src/store: Redux related files
- src/hoc: Higher Order Components, if any are present