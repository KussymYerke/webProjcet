import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloeader/Preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                {/*<img className={s.profile} src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png" alt=""/>*/}
                <img className={s.photo} src={props.profile.photos.large} alt=""/>
                {/*<img className={s.jobPhoto} src="https://www.ubm-development.com/magazin/wp-content/uploads/2020/06/Waagrechter-Wolkenkratzer-7-1024x576.jpg" alt=""/>*/}
                <div className={s.details}>
                    <div className={s.status}>
                        <h3 className={s.stat}>Status: </h3>
                        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    </div>
                    <div className={s.about}>
                        <h2 >About me:</h2>
                        {props.profile.aboutMe}
                    </div>
                    <ul className={s.list}>
                        <li><a href={props.profile.contacts.facebook}><img width={'36px'} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png'}/></a></li>
                        <li><a href={props.profile.contacts.vk}><img width={'36px'} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/768px-VK_Compact_Logo_%282021-present%29.svg.png'} /></a></li>
                        <li><a href={props.profile.contacts.twitter}><img width={'36px'} src={'https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png' }/></a></li>
                    </ul>
                </div>
                <div className={s.job}>
                    {props.profile.lookingForAJob ? (
                        <img className={s.jobPhoto} src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/06/30125154/How-to-Get-a-Job-Where-You-Used-to-Work.jpg"/>
                    ) : (
                        <img src="data:image/png;base64,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" />
                    )
                    }<br/>
                    <div className={s.des}>
                        <span><h2>Job description:</h2></span>{props.profile.lookingForAJobDescription}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;