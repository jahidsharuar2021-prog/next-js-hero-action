
"use client";
import { newTaskAction } from "@/lib/actions";
import { Button, Input, Label,ListBox,Select,Form, TextField, FieldError } from "@heroui/react";

const NewTask = () => {
  return (
    <div className="w-1/2 mx-auto">
      <h2 className="text-5xl">Add a new task</h2>
      <div>
        <Form action={newTaskAction} className="flex flex-col gap-4">
          <TextField
            isRequired
            minLength={5}
            validate={(Value) => {
              if (Value.length < 5) {
                return "Title must be at least 8 characters or longer";
              }
            }}
            className="w-full"
            name="title"
            type="text"
          >
            <Label>Title</Label>
            <Input placeholder="Enter your task title" />
            <FieldError />
          </TextField>
          <TextField className="w-full" name="description" type="text">
            <Label>Task Description</Label>
            <Input placeholder="Enter your task description" />
          </TextField>

          <Select
            name="priority"
            className="w-[256px]"
            placeholder="Select one"
          >
            <Label>Priority</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="low" textValue="low">
                  low
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="medium" textValue="medium">
                  Medium
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="high" textValue="high">
                  High
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          <Select name="status" className="w-[256px]" placeholder="Select one">
            <Label>Status</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="pending" textValue="pending">
                  pending
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="Progress" textValue="Progress">
                  Progress
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="completed" textValue="completed">
                  completed
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          <TextField className="w-full" name="assignedTo">
            <Label>Assigned TO</Label>
            <Input placeholder="Task assign to" />
          </TextField>

          <Button slot="close" variant="secondary">
            Cancel
          </Button>
          <Button slot="close" type="submit">
            Submit Task
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default NewTask;
