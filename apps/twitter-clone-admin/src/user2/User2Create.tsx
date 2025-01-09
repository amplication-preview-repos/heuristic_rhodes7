import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { LikeTitle } from "../like/LikeTitle";

export const User2Create = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="updatedAt.id"
          reference="Like"
          label="Updated At"
        >
          <SelectInput optionText={LikeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
