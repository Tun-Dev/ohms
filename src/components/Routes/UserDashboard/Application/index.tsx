import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { UploadIcon, CloseIcon } from "assets";
import { facultyValues, levelValues } from "./formData";
import { DocumentIcon } from "assets";
import { truncateString } from "utils";
import { ConfirmApplication } from "components/GeneralComponent";
import { Button } from "components/GeneralComponent";
// import { useForm } from "react-hook-form";
// import { Button } from "react-bootstrap";

interface FileItemProps {
  name?: string;
  size?: string;
  onClick: () => void;
}

const FileItem: React.FC<FileItemProps> = ({ name, size, onClick }) => {
  return (
    <>
      <div className={styles.fileitem}>
        <div className={styles.left}>
          <DocumentIcon />
        </div>
        <div className={styles.right}>
          <h4>{name}</h4>
          <h5>{size}</h5>
        </div>
        <div onClick={() => onClick()} className={styles.close}>
          <CloseIcon />
        </div>
      </div>
    </>
  );
};

const UserApplicationUI = () => {
  const [paymentSlip, setPaymentSlip] = useState<any>([]);
  const [lawyerLetter, setLawyerLetter] = useState<any>([]);
  const [wapicReceipt, setWapicReceipt] = useState<any>([]);
  const [lagmobileReceipt, setLagmobileReceipt] = useState<any>([]);
  const [finalData, setFinalData] = useState<any>([]);
  const [show, setShow] = useState(false);
  const { handleSubmit, setValue, control, watch, reset, register } = useForm();

  const submitApp = (data: any) => {
    const n_data = {
      ...data,
      hostelPaySlipUrl: paymentSlip,
      letterUrl: lawyerLetter,
      wapicUrl: wapicReceipt,
      lagmobileUrl: lagmobileReceipt,
    };
    console.log(n_data);
    setFinalData(n_data);
  };

  const getSizeInMb = (bytes: any) => {
    const sizeInMb = bytes / 1048576;
    return sizeInMb.toFixed(1) + " MB";
  };

  const handleFileChangePay = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file: File | undefined = event.target.files?.[0];

    setPaymentSlip([file]);
  };

  const handleFileChangeLaw = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file: File | undefined = event.target.files?.[0];

    setLawyerLetter([...lawyerLetter, file]);
  };

  const handleFileChangeWap = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file: File | undefined = event.target.files?.[0];

    setWapicReceipt([...wapicReceipt, file]);
  };

  const handleFileChangeLag = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file: File | undefined = event.target.files?.[0];

    setLagmobileReceipt([...lagmobileReceipt, file]);
  };

  // };
  const removeFilePay = (filename: any) => {
    setPaymentSlip(paymentSlip.filter((file: any) => file.name !== filename));
  };
  // };
  const removeFileLaw = (filename: any) => {
    setLawyerLetter(lawyerLetter.filter((file: any) => file.name !== filename));
  };
  // };
  const removeFileWap = (filename: any) => {
    setWapicReceipt(wapicReceipt.filter((file: any) => file.name !== filename));
  };
  // };
  const removeFileLag = (filename: any) => {
    setLagmobileReceipt(
      lagmobileReceipt.filter((file: any) => file.name !== filename)
    );
  };

  useEffect(() => {
    console.log(paymentSlip);
  }, [paymentSlip]);

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];

  //   setPaymentSlip([...paymentSlip, file]);
  // };

  return (
    <>
      <ConfirmApplication
        show={show}
        closeModal={() => setShow(!show)}
        data={finalData}
      />
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
                  <input type="text" id="name" {...register("fistname")} />
                </div>
                <div className={styles.inputgroups}>
                  <div className={styles.input}>
                    <label htmlFor="name">First name</label>
                    <input type="text" id="name" {...register("lastname")} />
                  </div>
                  <div className={styles.input}>
                    <label htmlFor="name">Other names</label>
                    <input type="text" id="name" {...register("othername")} />
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
                      <input type="file" onChange={handleFileChangePay} />
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
                    {paymentSlip &&
                      paymentSlip.map((item: any, index: number) => {
                        return (
                          <FileItem
                            key={index}
                            name={truncateString(item.name, 15)}
                            size={getSizeInMb(item.size)}
                            onClick={() => removeFilePay(item.name)}
                          />
                        );
                      })}
                  </div>
                  <div className={styles.file}>
                    <h5>Signed letter by lawyer</h5>
                    <div className={styles.file__inner}>
                      <input type="file" onChange={handleFileChangeLaw} />
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
                    {lawyerLetter &&
                      lawyerLetter.map((item: any, index: number) => {
                        return (
                          <FileItem
                            key={index}
                            name={truncateString(item.name, 15)}
                            size={getSizeInMb(item.size)}
                            onClick={() => removeFileLaw}
                          />
                        );
                      })}
                  </div>
                  <div className={styles.file}>
                    <h5>WAPIC insurance receipt</h5>
                    <div className={styles.file__inner}>
                      <input type="file" onChange={handleFileChangeWap} />
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
                    {wapicReceipt &&
                      wapicReceipt.map((item: any, index: number) => {
                        return (
                          <FileItem
                            key={index}
                            name={truncateString(item.name, 15)}
                            size={getSizeInMb(item.size)}
                            onClick={() => removeFileWap}
                          />
                        );
                      })}
                  </div>
                  <div className={styles.file}>
                    <h5>Lagmobile receipt</h5>
                    <div className={styles.file__inner}>
                      <input type="file" onChange={handleFileChangeLag} />
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
                    {lagmobileReceipt &&
                      lagmobileReceipt.map((item: any, index: number) => {
                        return (
                          <FileItem
                            key={index}
                            name={truncateString(item.name, 15)}
                            size={getSizeInMb(item.size)}
                            onClick={() => removeFileLag}
                          />
                        );
                      })}
                  </div>
                </div>
              </div>
              <div className={styles.submit}>
                <Button
                  type="submit"
                  size="large"
                  color="blue"
                  onClick={() => setShow(true)}
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
