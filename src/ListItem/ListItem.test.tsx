import React from 'react';

import { testSnapshots, samplePropsListItem } from '../utils-test';
import { ListItem } from './ListItem';


jest.mock('../Button/Button');
jest.mock('../ButtonGroup/ButtonGroup');


testSnapshots('spec/ListItem', ListItem, samplePropsListItem);
