import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  DateTimeInput,
  TextInput,
  ReferenceInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const LostItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="category"
          label="category"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="dateLost" source="dateLost" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="locationLost" source="locationLost" />
        <TextInput label="name" source="name" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
