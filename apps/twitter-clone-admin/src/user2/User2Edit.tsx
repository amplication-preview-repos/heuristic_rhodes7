import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { LikeTitle } from "../like/LikeTitle";

export const User2Edit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="updatedAt.id"
          reference="Like"
          label="Updated At"
        >
          <SelectInput optionText={LikeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
