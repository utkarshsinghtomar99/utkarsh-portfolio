import { useDispatch, useSelector } from "react-redux";
import SectionTitle from "../SectionTitle";
import { Badge, Button, Label, Textarea, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import {
  edit,
  updateData,
  cancelEdit,
} from "../../redux/portfolio/portfolioSlice";

const AboutForm = () => {
  const dispatch = useDispatch();
  /* ++-++-++-++-++-++-++-++-++-++ */
  const { portfolioData, editMode } = useSelector((state) => state.portfolio);
  const { about } = portfolioData;
  const { description1, description2, skills } = about;
  /* ++-++-++-++-++-++-++-++-++-++ */
  /* EXTRACTING FORM DATA | TO CREATE NEW DATA */
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newSkillsArr;
    if (typeof formData.skills === "string") {
      const newSkills = formData.skills.split(",").map((skill) => skill.trim());
      newSkillsArr = newSkills;
    }
    //-----
    const updatingData = {
      modelName: "about",
      modelId: about._id,
      data:
        newSkillsArr !== "undefined"
          ? { ...formData, skills: newSkillsArr }
          : formData,
    };
    dispatch(updateData(updatingData));
  };
  /* EXTRACTING FORM DATA | TO CREATE NEW DATA*/

  useEffect(() => {
    if (editMode.isEdit) {
      setFormData({
        description1: editMode.data.description1,
        description2: editMode.data.description2,
        skills: editMode.data.skills,
      });
    } else {
      setFormData({
        description1: "",
        description2: "",
        skills: "",
      });
    }
  }, [editMode]);

  const handleEdit = (about) => {
    dispatch(edit(about));
  };

  const handleCancel = () => {
    dispatch(cancelEdit());
  };

  return (
    <>
      <SectionTitle title={`About`} />
      <div>
        <form className="flex flex-col gap-5" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="description1" value="Description 1:" />
            </div>
            <Textarea
              onChange={handleChange}
              id="description1"
              type="text"
              name="description1"
              value={formData.description1}
              placeholder={description1}
              required
              rows={4}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="description2" value="Description 2:" />
            </div>
            <Textarea
              onChange={handleChange}
              id="description2"
              type="text"
              name="description2"
              value={formData.description2}
              placeholder={description2}
              required
              rows={4}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="skills" value="Skills:" />
            </div>

            <div className="mb-5">
              <TextInput
                name="skills"
                id="skills"
                onChange={handleChange}
                value={formData.skills}
              />
            </div>

            <div className="flex flex-wrap gap-5">
              {skills.map((skill, index) => (
                <Badge key={index} color="gray">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-end gap-5">
            {!editMode.isEdit ? (
              <Button outline onClick={() => handleEdit(about)}>
                Update About
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

export default AboutForm;
