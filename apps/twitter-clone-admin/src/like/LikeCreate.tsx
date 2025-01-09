import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { User2Title } from "../user2/User2Title";

export const LikeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="user2s.id" reference="User2" label="User2s">
          <SelectInput optionText={User2Title} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
