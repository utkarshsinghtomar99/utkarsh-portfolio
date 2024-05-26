import { useDispatch, useSelector } from "react-redux";
import SectionTitle from "../SectionTitle";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import {
  edit,
  updateData,
  cancelEdit,
} from "../../redux/portfolio/portfolioSlice";

const IntroForm = () => {
  const dispatch = useDispatch();
  const { portfolioData, editMode } = useSelector((state) => state.portfolio);
  const { intro } = portfolioData;
  const { welcomeText, firstName, lastName, caption, description } = intro;
  /* EXTRACTING FORM DATA | TO CREATE NEW DATA */
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatingData = {
      modelName: "intro",
      modelId: intro._id,
      data: formData,
    };
    dispatch(updateData(updatingData));
  };
  /* EXTRACTING FORM DATA | TO CREATE NEW DATA*/

  useEffect(() => {
    if (editMode.isEdit) {
      setFormData({
        welcomeText: editMode.data.welcomeText,
        firstName: editMode.data.firstName,
        lastName: editMode.data.lastName,
        caption: editMode.data.caption,
        description: editMode.data.description,
      });
    } else {
      setFormData({
        welcomeText: "",
        firstName: "",
        lastName: "",
        caption: "",
        description: "",
      });
    }
  }, [editMode]);

  const handleEdit = (intro) => {
    dispatch(edit(intro));
  };

  const handleCancel = () => {
    dispatch(cancelEdit());
  };

  return (
    <>
      <SectionTitle title={`Intro`} />
      <div>
        <form className="flex flex-col gap-5" onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-row sm:flex-col  justify-between gap-5">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="welcomeText" value="Welcome Text:" />
              </div>
              <TextInput
                onChange={handleChange}
                id="welcomeText"
                type="text"
                name="welcomeText"
                value={formData.welcomeText}
                placeholder={welcomeText}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="firstName" value="First Name:" />
              </div>
              <TextInput
                onChange={handleChange}
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                placeholder={firstName}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="lastName" value="Last Name:" />
              </div>
              <TextInput
                onChange={handleChange}
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                placeholder={lastName}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="caption" value="Caption:" />
              </div>
              <TextInput
                onChange={handleChange}
                id="caption"
                type="text"
                name="caption"
                value={formData.caption}
                placeholder={caption}
                required
              />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="description" value="Description:" />
            </div>
            <Textarea
              onChange={handleChange}
              id="description"
              type="text"
              name="description"
              value={formData.description}
              placeholder={description}
              required
              rows={4}
            />
          </div>
          <div className="flex items-center justify-end gap-5">
            {!editMode.isEdit ? (
              <Button outline onClick={() => handleEdit(intro)}>
                Update Intro
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

export default IntroForm;
