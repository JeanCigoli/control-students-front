import { UpdatePrimaryStudentsForm } from './update-primary-students-form';
import { UpdateSecondaryStudentsForm } from './update-secondary-students-form';

export type UpdateUserForm =
  | (UpdatePrimaryStudentsForm & { id: string })
  | (UpdateSecondaryStudentsForm & { id: string });
