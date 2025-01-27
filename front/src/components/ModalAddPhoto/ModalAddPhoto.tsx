import Modal from "@/shared/components/Modal/Modal";
import FormAddPhoto from "./FormAddPhoto/FormAddPhoto";

interface IModalAddPhoto {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  albums: string[];
}

export default function ModalAddPhoto({
  open,
  setOpen,
  albums,
}: IModalAddPhoto) {
  return (
    <Modal open={open} title="Add a photo right here!">
      <FormAddPhoto albums={albums} setOpen={setOpen} />
    </Modal>
  );
}
