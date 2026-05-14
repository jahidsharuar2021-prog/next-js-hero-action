"use client";

import { CirclePlus } from "@gravity-ui/icons";
import { Button,ListBox, Select, Input, Label, Modal, Surface, TextField } from "@heroui/react";

export function AddTask({ createATask }) {
  return (
    <Modal>
      <Button variant="secondary">Add a Task</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <CirclePlus className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and well get back to you. The modal
                adapts automatically when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={createATask} className="flex flex-col gap-4">
                  <TextField className="w-full" name="title" type="text">
                    <Label>Title</Label>
                    <Input placeholder="Enter your task title" />
                  </TextField>
                  <TextField className="w-full" name="description" type="text">
                    <Label>Task Description</Label>
                    <Input placeholder="Enter your task description" />
                  </TextField>

                  <Select name="priority" className="w-[256px]" placeholder="Select one">
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
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit">Submit Task</Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
