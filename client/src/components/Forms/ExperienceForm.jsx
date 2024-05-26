import SectionTitle from "../SectionTitle";
import {
  Avatar,
  Button,
  Card,
  Modal,
  Label,
  TextInput,
  Textarea,
} from "flowbite-react";
import addIcon from "../../assets/add-icon.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createData,
  deleteData,
  edit,
  cancelEdit,
  updateData,
} from "../../redux/portfolio/portfolioSlice";

const ExperienceForm = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});
  const { portfolioData, editMode } = useSelector((state) => state.portfolio);
  const { experiences } = portfolioData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const modelName = "experience";
    if (editMode.isEdit) {
      const updatingData = {
        modelName,
        modelId: editMode.data._id,
        data: formData,
      };
      dispatch(updateData(updatingData));
    } else {
      const creatingData = {
        modelName,
        data: formData,
      };
      dispatch(createData(creatingData));
    }
    setShowModal(false);
  };

  useEffect(() => {
    setFormData({
      period: editMode.data.period,
      company: editMode.data.company,
      title: editMode.data.title,
      description: editMode.data.description,
    });
  }, [editMode]);

  const handleEdit = (experience) => {
    dispatch(edit(experience));
  };
  const handleDelete = (id) => {
    const deletingData = {
      modelName: "experience",
      modelId: id,
    };
    dispatch(deleteData(deletingData));
  };

  const handleCancel = () => {
    setShowModal(false);
    if (editMode.isEdit) {
      dispatch(cancelEdit());
    }
  };

  return (
    <div className="pb-10">
      <SectionTitle title={`Experiences`} />
      <div
        className={
          experiences.length ? "grid grid-cols-2 gap-5 sm:grid-cols-1" : ""
        }
      >
        {experiences.length === 0 ? (
          <div className=" h-40 flex items-center justify-center">
            <h1 className="text-3xl p-5 font-bold text-center bg-red-200 rounded-xl text-red-700">
              No Experience Detected
            </h1>
          </div>
        ) : (
          experiences.map((experience) => (
            <Card key={experience._id}>
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {experience.period}
                </h1>
                <span className="text-gray-400">
                  <em>, {experience.company}</em>
                </span>
              </div>
              <hr />
              <h2 className="text-xl font-semibold text-slate-500">
                {experience.title}
              </h2>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {experience.description}
              </p>
              <div className="flex items-center justify-end pt-5 gap-5">
                <Button
                  size={`xs`}
                  className="flex sm:w-full bg-secondary"
                  onClick={() => {
                    setShowModal(true);
                    handleEdit(experience);
                  }}
                >
                  Update
                </Button>
                <Button
                  onClick={() => handleDelete(experience._id)}
                  size={`xs`}
                  className="flex sm:w-full"
                  color={`failure`}
                >
                  Delete
                </Button>
              </div>
            </Card>
          ))
        )}
      </div>
      <div className="flex items-center justify-end h-5 pt-16">
        <Button
          onClick={() => setShowModal(true)}
          size="xs"
          className="py-1 flex sm:w-full"
          color={`success`}
        >
          <Avatar img={addIcon} size={`xs`} className="invert mr-3" />
          <div className="items-center text-lg">Add Experience</div>
        </Button>
      </div>
      <div id="add-update-experience-modal">
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <Modal.Header>
            {editMode.isEdit ? "Update Experience" : "Add Experience"}
          </Modal.Header>
          <Modal.Body>
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="period" value="Period:" />
                </div>
                <TextInput
                  onChange={handleChange}
                  value={formData.period}
                  id="period"
                  name="period"
                  type="text"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="company" value="Company:" />
                </div>
                <TextInput
                  onChange={handleChange}
                  value={formData.company}
                  id="company"
                  name="company"
                  type="text"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="title" value="Role:" />
                </div>
                <TextInput
                  onChange={handleChange}
                  value={formData.title}
                  id="title"
                  name="title"
                  type="text"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="description" value="Description:" />
                </div>
                <Textarea
                  onChange={handleChange}
                  value={formData.description}
                  id="description"
                  name="description"
                  type="text"
                  rows={4}
                  required
                />
              </div>
              <div className="flex gap-5 items-center justify-end">
                <Button type="submit">Submit</Button>
                <Button onClick={() => handleCancel()} color="failure">
                  Cancel
                </Button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default ExperienceForm;
