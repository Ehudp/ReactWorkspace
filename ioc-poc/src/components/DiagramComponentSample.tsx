import React from 'react';
import {
  ConnectorModel,
  DataBinding,
  DiagramComponent,
  GridlinesModel,
  HierarchicalTree,
  Inject,
  NodeConstraints,
  NodeModel,
  SnapConstraints,
  Snapping,
  SnapSettings,
  SnapSettingsModel,
} from '@syncfusion/ej2-react-diagrams';

import { Data, EmployeeInfo } from './data';
import { DataManager } from '@syncfusion/ej2-data';

// let nodes: NodeModel[] = [
//   {
//     id: 'node1',
//     offsetY: 50,
//     shape: { type: 'Flow', shape: 'Terminator' },
//     annotations: [
//       {
//         content: 'Start',
//       },
//     ],
//   },
//   {
//     id: 'node2',
//     offsetY: 140,
//     shape: { type: 'Flow', shape: 'Process' },
//     annotations: [
//       {
//         content: 'var i = 0;',
//       },
//     ],
//   },
//   {
//     id: 'node3',
//     offsetY: 230,
//     shape: { type: 'Flow', shape: 'Decision' },
//     annotations: [
//       {
//         content: 'i < 10?',
//       },
//     ],
//   },
//   {
//     id: 'node4',
//     offsetY: 320,
//     shape: { type: 'Flow', shape: 'PreDefinedProcess' },
//     annotations: [
//       {
//         content: 'print("Hello!!");',
//       },
//     ],
//   },
//   {
//     id: 'node5',
//     offsetY: 410,
//     shape: { type: 'Flow', shape: 'Process' },
//     annotations: [
//       {
//         content: 'i++;',
//       },
//     ],
//   },
//   {
//     id: 'node6',
//     offsetY: 500,
//     shape: { type: 'Flow', shape: 'Terminator' },
//     annotations: [
//       {
//         content: 'End',
//       },
//     ],
//   },
// ];

// let connectors: ConnectorModel[] = [
//   {
//     id: 'connector1',
//     sourceID: 'node1',
//     targetID: 'node2',
//   },
//   {
//     id: 'connector2',
//     sourceID: 'node2',
//     targetID: 'node3',
//   },
//   {
//     id: 'connector3',
//     sourceID: 'node3',
//     targetID: 'node4',
//     annotations: [{ content: 'Yes' }],
//   },
//   {
//     id: 'connector4',
//     sourceID: 'node3',
//     targetID: 'node6',
//     annotations: [{ content: 'No' }],
//     segments: [
//       { length: 30, direction: 'Right' },
//       { length: 300, direction: 'Bottom' },
//     ],
//   },
//   {
//     id: 'connector5',
//     sourceID: 'node4',
//     targetID: 'node5',
//   },
//   {
//     id: 'connector6',
//     sourceID: 'node5',
//     targetID: 'node3',
//     segments: [
//       { length: 30, direction: 'Left' },
//       { length: 200, direction: 'Top' },
//     ],
//   },
// ];

let dataSettings: object = {
  id: 'Name',
  parentId: 'ReportingPerson',
  dataManager: new DataManager(Data as JSON[]),
};

let layoutSetting: object = { type: 'OrganizationalChart' };

let node: NodeModel[] = [
  {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
    },
    // Text(label) added to the node
  },
  {
    // Position of the node
    offsetX: 350,
    offsetY: 350,
    // Size of the node
    width: 100,
    height: 100,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
    },
    // Text(label) added to the node
  },
];

let connectors: ConnectorModel[] = [
  {
    // Unique name for the connector
    id: 'connector1',
    // Source and Target node's name to which connector needs to be connected.
    sourceID: 'Start',
    targetID: 'Init',
    type: 'Orthogonal',
  },
];

let diagramInstance: DiagramComponent;

let gridlines: GridlinesModel = {
  //lineColor: 'red',
  lineDashArray: '2 2',

  snapIntervals: [100],
};

let snapSettings: SnapSettingsModel = {
  constraints: SnapConstraints.All,
  horizontalGridlines: gridlines,
  verticalGridlines: gridlines,
};

const Diagram = () => {
  return (
    <>
      <DiagramComponent
        id="diagram"
        ref={(diagram) => (diagramInstance = diagram as DiagramComponent)}
        width={'100%'}
        height={'600px'}
        nodes={node}
        //connectors={connectors}
        snapSettings={snapSettings}
        // render initialized Diagram
      >
        <Inject services={[Snapping]} />
      </DiagramComponent>
    </>
  );
};

export default Diagram;
