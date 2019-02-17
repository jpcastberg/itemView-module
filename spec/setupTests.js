import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetch from 'jest-fetch-mock';

Object.values = obj => Object.keys(obj).map(key => obj[key]);

configure({ adapter: new Adapter() });
