import React from 'react';

import { testSnapshots, samplePropsList } from '../utils-test';
import { List } from './List';


jest.mock('../ListItem/ListItem');
jest.mock('../Divider/Divider');
jest.mock('../ListProgressive/ListProgressive');
jest.mock('../Flex/Flex');


testSnapshots('spec/List', List, samplePropsList);
