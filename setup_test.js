// テストのための設定ファイル
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

global.window = {
  location: 1,
};
