import React from 'react';
import * as Flex from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';

import InlineMedia from './components/InlineMedia/InlineMedia';

const PLUGIN_NAME = 'InlineMediaPlugin';

export default class InlineMediaPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof Flex }
   */
  async init(flex: typeof Flex, manager: Flex.Manager): Promise<void> {
    const options: Flex.ContentFragmentProps = { 
      sortOrder: 0,
      if: (props) => props.message.source.type === 'media', 
    };
    flex.MessageBubble.Content.add(<InlineMedia key="inline-media-component" />, options);
  }
}
