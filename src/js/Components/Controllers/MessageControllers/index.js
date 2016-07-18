import {
  GetConfig,
  SetConfig,
} from './Config';
import {
  GetAll,
} from './Frame';
import {
  GetQueues
} from './Queue';
import {
  OpenWindow,
  ShouldDecorateWindow,
} from './Window';
import { GetHistory } from './History';

const MessageControllers = {
  GetConfig,
  SetConfig,
  OpenWindow,
  ShouldDecorateWindow,
  GetHistory,
  GetAllFrames: GetAll,
  GetQueues: GetQueues,
};

module.exports = MessageControllers;