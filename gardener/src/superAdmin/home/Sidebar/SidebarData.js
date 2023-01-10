import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';
import * as GrIcons from 'react-icons/gr';
import * as TbIcons from 'react-icons/tb';
import * as GiIcons from 'react-icons/gi';
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';
import * as FcIcons from 'react-icons/fc';

export const SidebarData = [
    {
        title: 'Employees',
        path:'/employees',
        icon: <BsIcons.BsFillPersonLinesFill/>,
        cName: 'nav-text'
    },

    {
        title: 'Organization Structure',
        path:'/organization-structure',
        icon: <GiIcons.GiOrganigram/>,
        cName: 'nav-text'
    },
    {
        title: 'News',
        path: '/news',
        icon: <BsIcons.BsNewspaper/>,
        cName: 'nav-text'
    },

    {
        title: 'Announcements',
        path: '/announcements',
        icon: <GrIcons.GrAnnounce/>,
        cName: 'nav-text'
    },
    {
        title: 'Posters',
        path: '/posters',
        icon: <TbIcons.TbSlideshow />,
        cName: 'nav-text'
    },
    {
        title: 'Inquiries',
        path: '/inquries',
        icon: <MdIcons.MdReportProblem />,
        cName: 'nav-text'
    },

    {
        title: 'Permissions',
        path:'/permissions',
        icon: <FcIcons.FcApproval/>,
        cName: 'nav-text'
    },

    {
        title: 'Grievances',
        path: '/grievances',
        icon: <FaIcons.FaWpforms />,
        cName: 'nav-text'
    },
    {
        title: 'Citizen Services',
        path: '/citizenservices',
        icon: <FaIcons.FaWpforms />,
        cName: 'nav-text'
    },
    {
        title: 'Garden Details',
        path: '/gardendetails',
        icon: <FaIcons.FaWpforms />,
        cName: 'nav-text'
    },
    {
        title: 'Waste Collection',
        path: '/wastecollections',
        icon: <FaIcons.FaWpforms />,
        cName: 'nav-text'
    },
    {
        title: 'Acheivements',
        path: '/acheivements',
        icon: <FaIcons.FaWpforms />,
        cName: 'nav-text'
    },
    {
        title: 'Terms and Conditions',
        path: '/termsandconditions',
        icon: <FaIcons.FaWpforms />,
        cName: 'nav-text'
    },
    {
        title: 'Log Report',
        path:'/log-report',
        icon: <TbIcons.TbReport/>,
        cName: 'nav-text'
    },
    {
        title: 'Log Out',
        path:'/log-out',
        icon: <BiIcons.BiLogOut/>,
        cName: 'nav-text'
    },


];