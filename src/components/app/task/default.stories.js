import { fn } from '@storybook/test'

import AppTask from './default.vue'

export const ActionsData = {
  onPinTask: fn(),
  onArchiveTask: fn()
}

export default {
  component: AppTask,
  title: 'task',
  tags: ['app'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData
  }
}

export const DefaultState = {
  args: {
    task: {
      id: '1',
      title: 'default Task',
      state: 'TASK_INBOX'
    }
  }
}

export const PinnedState = {
  args: {
    task: {
      ...DefaultState.args.task,
      title: 'task-pinned',
      state: 'TASK_PINNED'
    }
  }
}

export const ArchivedState = {
  args: {
    task: {
      ...DefaultState.args.task,
      title: 'task-archived',
      state: 'TASK_ARCHIVED'
    }
  }
}
