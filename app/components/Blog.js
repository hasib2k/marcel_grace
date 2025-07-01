'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import SingleBlog from "@/app/SingleBlog";
import SectionHeader from "./SectionHeader";
import { useRef, useState } from 'react';
import { FiArrowRight, FiCalendar, FiTag, FiTrendingUp, FiSearch, FiFilter } from 'react-icons/fi';
import { blogs } from '@/app/data/blogs.js';
import Link from 'next/link';

const categories = [
	{
		name: 'Technology',
		color: 'from-blue-500 to-cyan-500',
		icon: FiTrendingUp,
		count: 12
	},
	{
		name: 'Innovation',
		color: 'from-violet-500 to-purple-500',
		icon: FiFilter,
		count: 8
	},
	{
		name: 'Development',
		color: 'from-primary-500 to-secondary-500',
		icon: FiTag,
		count: 15
	},
	{
		name: 'AI & ML',
		color: 'from-emerald-500 to-teal-500',
		icon: FiCalendar,
		count: 10
	}
];

export default function Blog() {
	return null;
}
