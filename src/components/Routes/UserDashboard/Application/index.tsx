import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { UploadIcon } from "assets";
import { facultyValues, levelValues } from "./formData";
import { DocumentIcon } from "assets";
import { Button } from "components/GeneralComponent";
// import { useForm } from "react-hook-form";
// import { Button } from "react-bootstrap";

const FileItem = () => {
  return (
    <>
      <div className={styles.fileitem}>
        <div className={styles.left}>
          <DocumentIcon />
        </div>
        <div className={styles.right}>
          <h4>Testing.png</h4>
          <h5>2.4mb</h5>
        </div>
      </div>
    </>
  );
};

const UserApplicationUI = () => {
  const [paymentSlip, setPaymentSlip] = useState([]);
  const [lawyerLetter, setLawyerLetter] = useState([]);
  const [wapicReceipt, setWapicReceipt] = useState([]);
  const [lagmobileReceipt, setLagmobileReceipt] = useState([]);
  const { handleSubmit, setValue, control, watch, reset, register } = useForm();

  const submitApp = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <div className={styles.con}>
        <div className={styles.con__wrapper}>
          <form onSubmit={handleSubmit(submitApp)}>
            <div className={styles.con__wrapper__info}>
              <div className={styles.header}>
                <h5>User information</h5>
              </div>
              <div className={styles.wordsInput}>
                <div className={styles.input}>
                  <label htmlFor="name">Surname</label>
                  <input type="text" id="name" {...register("surname")} />
                </div>
                <div className={styles.inputgroups}>
                  <div className={styles.input}>
                    <label htmlFor="name">First name</label>
                    <input type="text" id="name" {...register("firstName")} />
                  </div>
                  <div className={styles.input}>
                    <label htmlFor="name">Other names</label>
                    <input type="text" id="name" {...register("lastName")} />
                  </div>
                </div>
                <div className={styles.input}>
                  <label htmlFor="name">Faculty</label>
                  <Controller
                    name="faculty"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) => {
                      return (
                        <Select
                          options={facultyValues}
                          onChange={(facultyValues) =>
                            onChange(facultyValues.value)
                          }
                          value={facultyValues.filter((option) =>
                            value?.includes(option.value)
                          )}
                          defaultValue={facultyValues.filter((option) =>
                            value?.includes(option.value)
                          )}
                          classNamePrefix="select"
                          placeholder="Select your faculty"
                          // components={animatedComponents}
                          className={styles.select}
                        />
                      );
                    }}
                  />
                </div>
                <div className={styles.input}>
                  <label htmlFor="name">Department</label>
                  <input type="text" id="name" {...register("department")} />
                </div>
                <div className={styles.inputgroups}>
                  <div className={styles.input}>
                    <label htmlFor="name">Level</label>
                    <Controller
                      name="level"
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => {
                        return (
                          <Select
                            options={levelValues}
                            onChange={(levelValues) =>
                              onChange(levelValues.value)
                            }
                            value={levelValues.filter((option) =>
                              value?.includes(option.value)
                            )}
                            defaultValue={levelValues.filter((option) =>
                              value?.includes(option.value)
                            )}
                            classNamePrefix="select"
                            placeholder="Select your level"
                            // components={animatedComponents}
                            className={styles.select}
                          />
                        );
                      }}
                    />
                  </div>
                  <div className={styles.input}>
                    <label htmlFor="name">Hostel Room No.</label>
                    <input type="text" name="name" id="name" />
                  </div>
                </div>
                {/* <div className={styles.radiogroups}>
                  <h5>Gender</h5>
                  <div className={styles.input__radio}>
                    <input
                      type="radio"
                      value="Male"
                      {...register("male")}
                    />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className={styles.input__radio}>
                    <input type="radio" value="Male" name="male" />
                    <label htmlFor="male">Female</label>
                  </div>
                </div> */}
                <div className={styles.clear}>
                  <Button
                    color="transparent"
                    size="medium"
                    onClick={() => null}
                  >
                    Clear all
                  </Button>
                </div>
              </div>
            </div>
            <div className={styles.con__wrapper__files}>
              <div className={styles.divider}></div>
              <div className={styles.header}>
                <h5>Files upload</h5>
              </div>
              <div className={styles.filescon}>
                <div className={styles.filescon__words}>
                  <h4>Upload and attach files</h4>
                  <h5>Upload and attach files for your application</h5>
                </div>
                <div className={styles.files}>
                  <div className={styles.file}>
                    <h5>Hostel payment slip</h5>
                    <div className={styles.file__inner}>
                      <input type="file" />
                      <Button
                        color="transparent"
                        size="small"
                        onClick={() => null}
                        className={styles.btns}
                      >
                        <UploadIcon />
                        <p>
                          <span>Click to upload</span> or drag and drop
                        </p>
                        <p>PDF (max. 2MB)</p>
                      </Button>
                    </div>
                    <FileItem />
                  </div>
                  <div className={styles.file}>
                    <h5>Signed letter by lawyer</h5>
                    <div className={styles.file__inner}>
                      <input type="file" />
                      <Button
                        color="transparent"
                        size="small"
                        onClick={() => null}
                        className={styles.btns}
                      >
                        <UploadIcon />
                        <p>
                          <span>Click to upload</span> or drag and drop
                        </p>
                        <p>PDF (max. 2MB)</p>
                      </Button>
                    </div>
                  </div>
                  <div className={styles.file}>
                    <h5>WAPIC insurance receipt</h5>
                    <div className={styles.file__inner}>
                      <input type="file" />
                      <Button
                        color="transparent"
                        size="small"
                        onClick={() => null}
                        className={styles.btns}
                      >
                        <UploadIcon />
                        <p>
                          <span>Click to upload</span> or drag and drop
                        </p>
                        <p>PDF (max. 2MB)</p>
                      </Button>
                    </div>
                  </div>
                  <div className={styles.file}>
                    <h5>Lagmobile receipt</h5>
                    <div className={styles.file__inner}>
                      <input type="file" />
                      <Button
                        color="transparent"
                        size="small"
                        onClick={() => null}
                        className={styles.btns}
                      >
                        <UploadIcon />
                        <p>
                          <span>Click to upload</span> or drag and drop
                        </p>
                        <p>PDF (max. 2MB)</p>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.submit}>
                <Button
                  type="submit"
                  size="large"
                  color="blue"
                  onClick={() => null}
                  className={styles.btn}
                >
                  Confirm application
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export { UserApplicationUI };
