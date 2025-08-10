/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import ReactFlow, {
  Background,
  Controls,
  Handle,
  Position,
  addEdge,
  Connection,
  Edge,
  Node,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';

// -----------------------------
// Helper types & styles
// -----------------------------
type AnyNode = Node<any>;

const constEdgeStyle: React.CSSProperties = {
  stroke: '#425b5b',
  strokeWidth: 2,
};

// -----------------------------
// Custom Node: Side checkbox node
// -----------------------------
const SideCheckboxNode: React.FC<any> = ({ data }) => {
  return (
    <div className='max-w-[220px] px-3 py-2 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] backdrop-blur-sm text-sm text-white flex items-center gap-3'>
      <div className='flex items-center gap-2'>
        <label className='relative inline-flex items-center cursor-pointer'>
          <input type='checkbox' defaultChecked className='sr-only peer' />
          <div className='w-4 h-4 rounded grid place-items-center bg-[#111827] border border-[rgba(255,255,255,0.12)] peer-checked:bg-[#d7f7ee]'></div>
        </label>
      </div>
      <div className='truncate'>{data.label}</div>
      <Handle
        type='source'
        position={Position.Right}
        id='a'
        style={{ right: -8, background: 'transparent' }}
      />
    </div>
  );
};

// -----------------------------
// Custom Node: Center timeline node
// -----------------------------
const CenterTimelineNode: React.FC<any> = () => {
  return (
    <div className='w-[720px] h-[300px] rounded-2xl relative shadow-2xl bg-gradient-to-b from-[rgba(9,22,24,0.7)] to-[rgba(6,12,14,0.85)] border border-[rgba(255,255,255,0.03)] p-6 text-white overflow-hidden'>
      <div
        className='absolute inset-0 rounded-2xl pointer-events-none'
        style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02)' }}
      />

      <div className='flex h-full'>
        {/* Left timeline */}
        <div className='w-1/2 pr-4 flex flex-col'>
          <div className='flex items-center justify-between text-xs text-[rgba(255,255,255,0.6)] mb-3'>
            {['Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m) => (
              <div key={m}>{m}</div>
            ))}
          </div>

          <div className='relative flex-1 rounded-xl bg-gradient-to-b from-[rgba(70,120,120,0.04)] to-[rgba(30,40,40,0.02)] p-4'>
            <svg
              className='absolute inset-0 w-full h-full'
              viewBox='0 0 600 220'
              preserveAspectRatio='none'
            >
              {[0, 1, 2, 3, 4].map((i) => (
                <line
                  key={i}
                  x1={(i * 120).toString()}
                  x2={(i * 120).toString()}
                  y1='0'
                  y2='220'
                  stroke='rgba(255,255,255,0.03)'
                />
              ))}
              {[20, 140, 260, 380, 500].map((x, idx) => (
                <circle
                  key={idx}
                  cx={x}
                  cy={14}
                  r={3}
                  fill='rgba(255,255,255,0.06)'
                />
              ))}
              <rect
                x='30'
                y='60'
                rx='10'
                ry='10'
                width='190'
                height='36'
                fill='#2d6c78'
                opacity='0.9'
              />
              <rect
                x='35'
                y='64'
                rx='8'
                ry='8'
                width='120'
                height='28'
                fill='#4fc3c6'
                opacity='0.95'
              />
              <rect
                x='230'
                y='110'
                rx='10'
                ry='10'
                width='210'
                height='34'
                fill='#2f7a5b'
                opacity='0.85'
              />
              <rect
                x='255'
                y='114'
                rx='8'
                ry='8'
                width='140'
                height='26'
                fill='#65d18f'
                opacity='0.95'
              />
              <rect
                x='110'
                y='20'
                rx='10'
                ry='10'
                width='130'
                height='30'
                fill='#376b90'
                opacity='0.9'
              />
              <rect
                x='118'
                y='24'
                rx='8'
                ry='8'
                width='86'
                height='22'
                fill='#74b7e7'
                opacity='0.95'
              />
            </svg>

            <div className='absolute left-[95px] top-[70px]'>
              <svg width='22' height='22' viewBox='0 0 24 24' fill='none'>
                <path
                  d='M3 3L21 12L14 13L11 21L9 12L3 3Z'
                  fill='#0b2b2a'
                  stroke='#e6fbf6'
                  strokeWidth='0.7'
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Right description */}
        <div className='w-1/2 pl-6 flex flex-col justify-center'>
          <h3 className='text-2xl font-semibold mb-3'>
            Software Service Solutions
          </h3>
          <p className='text-[15px] text-[rgba(255,255,255,0.6)] leading-relaxed mb-6'>
            Plan, track, and manage projects with precision tools.
          </p>
          <div className='w-[140px] rounded-full py-3 text-center bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.02)]'>
            Discover
          </div>
        </div>
      </div>

      <Handle
        type='target'
        position={Position.Left}
        id='left'
        style={{ top: '50%', background: 'transparent' }}
      />
      <Handle
        type='source'
        position={Position.Right}
        id='right'
        style={{ top: '50%', background: 'transparent' }}
      />
    </div>
  );
};

// -----------------------------
// Node types
// -----------------------------
const nodeTypes = {
  sideCheckbox: SideCheckboxNode,
  centerTimeline: CenterTimelineNode,
};

// -----------------------------
// Initial nodes & edges
// -----------------------------
const initialNodes: AnyNode[] = [
  {
    id: 'left-1',
    type: 'sideCheckbox',
    position: { x: 20, y: 140 },
    data: { label: 'Website Development' },
    draggable: false,
  },
  {
    id: 'left-2',
    type: 'sideCheckbox',
    position: { x: 20, y: 300 },
    data: { label: 'Mobile App Development' },
    draggable: false,
  },
  {
    id: 'center',
    type: 'centerTimeline',
    position: { x: 260, y: 80 },
    data: {},
    draggable: false,
  },
  {
    id: 'right-1',
    type: 'sideCheckbox',
    position: { x: 1020, y: 140 },
    data: { label: 'UI/UX Engineering' },
    draggable: false,
  },
  {
    id: 'right-2',
    type: 'sideCheckbox',
    position: { x: 1020, y: 300 },
    data: { label: 'Software Services' },
    draggable: false,
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e-left1-center',
    source: 'left-1',
    target: 'center',
    style: constEdgeStyle,
    markerEnd: { type: MarkerType.Arrow, width: 16, height: 10 },
  },
  {
    id: 'e-left2-center',
    source: 'left-2',
    target: 'center',
    style: constEdgeStyle,
    markerEnd: { type: MarkerType.Arrow, width: 16, height: 10 },
  },
  {
    id: 'e-center-right1',
    source: 'center',
    target: 'right-1',
    style: constEdgeStyle,
    markerEnd: { type: MarkerType.Arrow, width: 16, height: 10 },
  },
  {
    id: 'e-center-right2',
    source: 'center',
    target: 'right-2',
    style: constEdgeStyle,
    markerEnd: { type: MarkerType.Arrow, width: 16, height: 10 },
  },
];

// -----------------------------
// Main component
// -----------------------------
export default function BannerTheme() {
  const [nodes, setNodes] = React.useState(initialNodes);
  const [edges, setEdges] = React.useState(initialEdges);

  const onConnect = React.useCallback((params: Edge | Connection) => {
    setEdges((eds) => addEdge(params as Edge, eds));
  }, []);

  return (
    <div className='flex items-center justify-center'>
      <div className='w-full h-[86vh] max-w-[1280px]'>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          panOnDrag={false}
          zoomOnScroll={false}
        >
          <Background gap={24} color='rgba(255,255,255,0.02)' />
          <Controls showInteractive={false} />
        </ReactFlow>
      </div>
    </div>
  );
}
