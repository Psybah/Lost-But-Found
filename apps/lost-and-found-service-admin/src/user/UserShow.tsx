import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="FoundItem"
          target="userId"
          label="FoundItems"
        >
          <Datagrid rowClick="show">
            <TextField label="category" source="category" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateFound" source="dateFound" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="image" source="image" />
            <TextField label="locationFound" source="locationFound" />
            <TextField label="name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="LostItem"
          target="userId"
          label="LostItems"
        >
          <Datagrid rowClick="show">
            <TextField label="category" source="category" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateLost" source="dateLost" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="locationLost" source="locationLost" />
            <TextField label="name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
