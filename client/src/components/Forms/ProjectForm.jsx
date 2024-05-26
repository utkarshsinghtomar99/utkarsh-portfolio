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

const ProjectForm = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});
  const { portfolioData, editMode } = useSelector((state) => state.portfolio);
  const { projects } = portfolioData;

  /* Handle Change */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* Handle Submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    const modelName = "project";
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

  /* Use Effect */
  useEffect(() => {
    if (editMode.isEdit) {
      setFormData({
        image: editMode.data.image,
        title: editMode.data.title,
        description: editMode.data.description,
        link: editMode.data.link,
      });
    } else {
      setFormData({
        image: "",
        title: "",
        description: "",
        link: "",
      });
    }
  }, [editMode]);

  /* Handle Edit */
  const handleEdit = (project) => {
    dispatch(edit(project));
  };

  /* Handle Delete */
  const handleDelete = (id) => {
    const deletingData = {
      modelName: "project",
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
      <SectionTitle title={`Projects`} />
      <div
        className={
          projects.length ? "grid grid-cols-4 gap-5 sm:grid-cols-1" : ""
        }
      >
        {projects.length === 0 ? (
          <div className=" h-40 flex items-center justify-center">
            <h1 className="text-3xl p-5 font-bold text-center bg-red-200 rounded-xl text-red-700">
              No Projects Detected
            </h1>
          </div>
        ) : (
          projects.map((project) => (
            <Card imgSrc={project.image} key={project._id}>
              <div className="flex flex-col justify-between">
                <div className="text-content">
                  <h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                    <a href={project.link}>{project.title}</a>
                  </h4>
                  <p className="text-gray-500">{project.description}</p>
                </div>
                <div className="flex gap-5 pt-10">
                  <Button
                    size={`xs`}
                    className="bg-secondary w-full"
                    onClick={() => {
                      setShowModal(true);
                      handleEdit(project);
                    }}
                  >
                    Update
                  </Button>
                  <Button
                    onClick={() => handleDelete(project._id)}
                    size={`xs`}
                    className="w-full"
                    color={`failure`}
                  >
                    Delete
                  </Button>
                </div>
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
          <div className="items-center text-lg">Add Project</div>
        </Button>
      </div>
      <div id="add-update-project-modal">
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <Modal.Header>
            {editMode.isEdit ? "Update Project" : "Add Project"}
          </Modal.Header>
          <Modal.Body>
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="image" value="Image:" />
                </div>
                <TextInput
                  onChange={handleChange}
                  value={formData.image}
                  id="image"
                  name="image"
                  type="text"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="title" value="Project Title:" />
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
                  <Label htmlFor="link" value="Project Link:" />
                </div>
                <TextInput
                  onChange={handleChange}
                  value={formData.link}
                  id="link"
                  name="link"
                  type="text"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="description" value="Project Description:" />
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

export default ProjectForm;
