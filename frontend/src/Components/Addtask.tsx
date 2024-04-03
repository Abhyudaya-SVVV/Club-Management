import React, { useState } from "react";
import styles from "@/styles/Addtask.module.css"
import { RxCross2 } from "react-icons/rx";
import { FaTag } from "react-icons/fa6";
import { IoMdPersonAdd } from "react-icons/io";
import MemberCard from "./MemberCard";

const Addtask = () => {
    const [subject, setSubject] = useState("");
    const [details, setDetails] = useState("");
    const [label, setLabel] = useState("Add Labels"); // Default label
    const [selectedMember, setSelectedMember] = useState<{
        name: string;
        pic: string;
    }>({ name: "Add member", pic: "https://picsum.photos/200" }); // Default selected member

    const members = [
        { name: "birla", pic: "https://picsum.photos/100" },
        { name: "pranjal", pic: "https://picsum.photos/400" },
        { name: "12abc", pic: "https://picsum.photos/600" },
        { name: "xae12", pic: "https://picsum.photos/300" },
    ];

    const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSubject(e.target.value);
    };

    const handleDetailsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDetails(e.target.value);
    };

    const handleLabelClick = (clickedLabel: string) => {
        setLabel(clickedLabel === label ? "Add Labels" : clickedLabel); // Toggle label
    };

    const handleMemberClick = (name: string, pic: string) => {
        setSelectedMember({ name, pic }); // Update selected member
    };

    const handleResetForm = () => {
        setSubject("");
        setDetails("");
        setLabel("Add Labels");
        setSelectedMember({ name: "Add member", pic: "https://picsum.photos/200" });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Task created:", { subject, details, label, selectedMember });
        // Reset form fields after submission
        handleResetForm();
    };
    return (
        <>
            <div className={styles.addTask}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.cross} onClick={handleResetForm}>
                        <RxCross2 />
                    </div>
                    <input
                        type="text"
                        placeholder="Enter Task Subject"
                        value={subject}
                        onChange={handleSubjectChange}
                        className={styles.subject}
                    />
                    <textarea
                        placeholder="Task Details"
                        value={details}
                        onChange={handleDetailsChange}
                    />
                    <div className={styles.tag}>
                        <FaTag className={styles.fatag} />
                        <input type="text" name="" id="" placeholder="Enter the label"/>
                    </div>
                    <div className={styles.member}>
                        <IoMdPersonAdd className={styles.personIcon} />
                        <div>
                            <div className={styles.selectMember}>
                                <MemberCard
                                    pic={selectedMember.pic}
                                    name={selectedMember.name}
                                    onClick={() =>
                                        handleMemberClick("123", "https://picsum.photos/200")
                                    }
                                />
                                <div className={styles["dropdown-menu"]}>
                                    {members.map((member) => (
                                        <MemberCard
                                            key={member.name}
                                            pic={member.pic}
                                            name={member.name}
                                            onClick={() => handleMemberClick(member.name, member.pic)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit">Done</button>
                </form>
            </div>
        </>
    )
}

export default Addtask;