import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { User2Title } from "../user2/User2Title";

export const LikeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="user2s.id" reference="User2" label="User2s">
          <SelectInput optionText={User2Title} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
