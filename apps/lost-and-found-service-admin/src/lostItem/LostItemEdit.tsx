import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  DateTimeInput,
  TextInput,
  ReferenceInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const LostItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
