import { Mosaic, MosaicWindow } from "react-mosaic-component";
import 'react-mosaic-component/react-mosaic-component.css';


export type ViewId = 'a' | 'b' | 'c' | 'new';

const TITLE_MAP: Record<ViewId, string> = {
  a: 'Left Window',
  b: 'Top Right Window',
  c: 'Bottom Right Window',
  new: 'New Window',
};

const Layout = () => (
  <Mosaic<ViewId>
    className="mosaic-foxglove-theme"
    renderTile={(id, path) => (
      <MosaicWindow<ViewId>
        path={path}
        createNode={() => 'new'}
        title=""
        onDragStart={() => console.log('MosaicWindow.onDragStart')}
        onDragEnd={(type) => console.log('MosaicWindow.onDragEnd', type)}
        renderToolbar={() => <div className="toolbar-example">Custom Toolbar</div>}
      >
      </MosaicWindow>
    )}
    initialValue={{
      direction: 'row',
      first: 'a',
      second: {
        direction: 'column',
        first: 'b',
        second: 'c',
      },
    }}
  />
);

export default Layout;
