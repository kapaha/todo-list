import addGlobalEventListener from './events';
import { toggleSideMenu } from './dom';

// Add event listeners
addGlobalEventListener('click', '[data-header-toggle]', toggleSideMenu);