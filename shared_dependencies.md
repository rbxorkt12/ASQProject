1. Exported Variables: 
   - `Header` and `Footer` from "website/components/Header.js" and "website/components/Footer.js" respectively, used in "website/pages/_app.js" and "website/pages/index.js".
   - `MindMap` from "website/components/MindMap.js", used in "website/pages/mindmap/index.js".
   - `Node` and `Edge` from "website/components/Node.js" and "website/components/Edge.js" respectively, used in "website/components/MindMap.js".

2. Data Schemas: 
   - `NodeSchema` and `EdgeSchema` used in "website/components/Node.js" and "website/components/Edge.js" respectively, and also in "website/utils/api.js".

3. ID Names of DOM Elements: 
   - `mindmap-container` in "website/components/MindMap.js".
   - `node-element` in "website/components/Node.js".
   - `edge-element` in "website/components/Edge.js".

4. Message Names: 
   - `NODE_CREATE_SUCCESS`, `NODE_CREATE_FAIL`, `EDGE_CREATE_SUCCESS`, `EDGE_CREATE_FAIL` used in "website/utils/api.js" and "website/components/MindMap.js".

5. Function Names: 
   - `getServerSideProps` in "website/pages/index.js" and "website/pages/mindmap/index.js".
   - `createNode` and `createEdge` in "website/components/MindMap.js" and "website/utils/api.js".
   - `renderNode` and `renderEdge` in "website/components/Node.js" and "website/components/Edge.js".

6. Shared Styles: 
   - Global styles from "website/styles/globals.css" used in "website/pages/_app.js".
   - `Header` and `Footer` styles from "website/styles/Header.css" and "website/styles/Footer.css" respectively, used in "website/components/Header.js" and "website/components/Footer.js".
   - `MindMap`, `Node`, and `Edge` styles from "website/styles/MindMap.css", "website/styles/Node.css", and "website/styles/Edge.css" respectively, used in their corresponding components.

7. Shared Assets: 
   - Favicon and logo from "website/public/favicon.ico" and "website/public/logo.png" respectively, used in "website/pages/_document.js".
   - Mindmap image from "website/public/images/mindmap.png" used in "website/pages/index.js".

8. Shared Dependencies: 
   - Next.js, React, and other dependencies specified in "website/package.json", used across all JS files.
   - Environment variables from "website/.env.local", used in "website/utils/api.js" and "website/next.config.js".