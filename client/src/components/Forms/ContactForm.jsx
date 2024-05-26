import { useDispatch, useSelector } from "react-redux";
import SectionTitle from "../SectionTitle";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import {
  edit,
  updateData,
  cancelEdit,
} from "../../redux/portfolio/portfolioSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const { portfolioData, editMode } = useSelector((state) => state.portfolio);
  const { contact } = portfolioData;

  const { name, email, phone, address } = contact;
  /* EXTRACTING FORM DATA | TO CREATE NEW DATA */
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatingData = {
      modelName: "contact",
      modelId: contact._id,
      data: formData,
    };
    dispatch(updateData(updatingData));
  };
  /* EXTRACTING FORM DATA | TO CREATE NEW DATA*/

  useEffect(() => {
    if (editMode.isEdit) {
      setFormData({
        name: editMode.data.name,
        email: editMode.data.email,
        phone: editMode.data.phone,
        address: editMode.data.address,
      });
    } else {
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
      });
    }
  }, [editMode]);

  const handleEdit = (contact) => {
    dispatch(edit(contact));
  };

  const handleCancel = () => {
    dispatch(cancelEdit());
  };

  return (
    <>
      <SectionTitle title={`Contact`} />
      <div>
        <form className="flex flex-col gap-5" onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-row sm:flex-col justify-between gap-5">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Name:" />
              </div>
              <TextInput
                onChange={handleChange}
                id="name"
                type="text"
                name="name"
                value={formData.name}
                placeholder={name}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email:" />
              </div>
              <TextInput
                onChange={handleChange}
                id="email"
                type="email"
                name="email"
                value={formData.email}
                placeholder={email}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Phone:" />
              </div>
              <TextInput
                onChange={handleChange}
                id="phone"
                type="text"
                name="phone"
                value={formData.phone}
                placeholder={phone}
                required
              />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="address" value="Address:" />
            </div>
            <Textarea
              onChange={handleChange}
              id="address"
              type="text"
              name="address"
              value={formData.address}
              placeholder={address}
              required
              rows={4}
            />
          </div>
          <div className="flex items-center justify-end gap-5">
            {!editMode.isEdit ? (
              <Button outline onClick={() => handleEdit(contact)}>
                Update Contact
              </Button>
            ) : (
              <div className="flex gap-5 items-center justify-end">
                <Button type="submit">Submit</Button>
                <Button onClick={() => handleCancel()} color="failure">
                  Cancel
                </Button>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
