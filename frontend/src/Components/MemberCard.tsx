import React from 'react';
import styles from "@/styles/MemberCard.module.css"

interface MemberCardProps {
    pic: string;
    name: string;
    onClick: (name: string, pic: string) => void;
}

const MemberCard: React.FC<MemberCardProps> = ({ pic, name, onClick }) => {
    // Set default values if no props are given
    const defaultPic = 'https://picsum.photos/200';
    const defaultName = 'John Doe';

    return (
        <div className={styles.MemberCard} onClick={() => onClick(name, pic)}>
            <img src={pic || defaultPic} alt="Profile Picture" />
            <h2>{name || defaultName}</h2>
        </div>
    );
};

export default MemberCard;
