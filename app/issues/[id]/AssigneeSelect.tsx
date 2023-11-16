'use client';

import { Select } from '@radix-ui/themes';
import React from 'react';

const AssigneeSelect = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder='Select...'></Select.Trigger>
      <Select.Content>
        <Select.Group>
          <Select.Label>Users</Select.Label>
          <Select.Item value='1'>John Doe</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  )
}

export default AssigneeSelect