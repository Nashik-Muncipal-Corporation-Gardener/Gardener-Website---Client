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
        path:'/super-admin/employee',
        icon: <BsIcons.BsFillPersonLinesFill/>,
        cName: 'nav-text'
    },

    {
        title: 'Organization Structure',
        path:'/super-admin/organization-structure',
        icon: <GiIcons.GiOrganigram/>,
        cName: 'nav-text'
    },
    {
        title: 'News',
        path: '/super-admin/addnews',
        icon: <BsIcons.BsNewspaper/>,
        cName: 'nav-text'
    },

    {
        title: 'Announcements',
        path: '/super-admin/announcements',
        icon: <GrIcons.GrAnnounce/>,
        cName: 'nav-text'
    },
    {
        title: 'Posters',
        path: '/super-admin/posters',
        icon: <TbIcons.TbSlideshow />,
        cName: 'nav-text'
    },
    {
        title: 'Inquiries',
        path: '/super-admin/inquries',
        icon: <MdIcons.MdReportProblem />,
        cName: 'nav-text'
    },

    {
        title: 'Permissions',
        path:'/super-admin/permissions',
        icon: <FcIcons.FcApproval/>,
        cName: 'nav-text'
    },

    {
        title: 'Grievances',
        path: '/super-admin/grievances',
        icon: <FaIcons.FaWpforms />,
        cName: 'nav-text'
    },
    {
        title: 'Citizen Services',
        path: '/super-admin/citizenservices',
        icon: <FaIcons.FaWpforms />,
        cName: 'nav-text'
    },
    {
        title: 'Garden Details',
        path: '/super-admin/gardendetails',
        icon: <FaIcons.FaWpforms />,
        cName: 'nav-text'
    },
    {
        title: 'Waste Collection',
        path: '/super-admin/wastecollection',
        icon: <FaIcons.FaWpforms />,
        cName: 'nav-text'
    },
    {
        title: 'Acheivements',
        path: '/super-admin/acheivements',
        icon: <FaIcons.FaWpforms />,
        cName: 'nav-text'
    },
    {
        title: 'Terms and Conditions',
        path: '/super-admin/termsandconditions',
        icon: <FaIcons.FaWpforms />,
        cName: 'nav-text'
    },
    {
        title: 'Log Report',
        path:'/super-admin/logreport',
        icon: <TbIcons.TbReport/>,
        cName: 'nav-text'
    },
    {
        title: 'Log Out',
        path:'/super-admin/logout',
        icon: <BiIcons.BiLogOut/>,
        cName: 'nav-text'
    },


];