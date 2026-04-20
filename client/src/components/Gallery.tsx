import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<null | number>(null);

  // Пълният списък с всички 36 снимки без никакви ротации
  const galleryImages = [
    { id: 1, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_3999_9c5474d6.webp', title: 'Beach Vibe 1' },
    { id: 2, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4000_68d7d68a.webp', title: 'Beach Vibe 2' },
    { id: 3, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4001_85cb0cb3.webp', title: 'Beach Vibe 3' },
    { id: 4, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4004_e945973b.webp', title: 'Beach Vibe 4' },
    { id: 5, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4005_364969f9.webp', title: 'Beach Vibe 5' },
    { id: 6, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4008_fee3344a.webp', title: 'Beach Vibe 6' },
    { id: 7, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4013_44099905.webp', title: 'Beach Vibe 7' },
    { id: 8, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4020_76aea105.webp', title: 'Beach Vibe 8' },
    { id: 9, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4021_0ad5cc90.webp', title: 'Beach Vibe 9' },
    { id: 10, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4022_423c0181.webp', title: 'Beach Vibe 10' },
    { id: 11, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4025_62a0ae3c.webp', title: 'Beach Vibe 11' },
    { id: 12, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4030_b804677d.webp', title: 'Beach Vibe 12' },
    { id: 13, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4031_bde0fded.webp', title: 'Beach Vibe 13' },
    { id: 14, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4042_ece203f1.webp', title: 'Beach Vibe 14' },
    { id: 15, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4051_f3f1bcdc.webp', title: 'Beach Vibe 15' },
    { id: 16, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4065_15d233b9.webp', title: 'Beach Vibe 16' },
    { id: 17, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4090_c6eedb68.webp', title: 'Beach Vibe 17' },
    { id: 18, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4093_8733f9b3.webp', title: 'Beach Vibe 18' },
    { id: 19, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4094_9a2a3076.webp', title: 'Beach Vibe 19' },
    { id: 20, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4106_63a745e8.webp', title: 'Beach Vibe 20' },
    { id: 21, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4147_c84e1bab.webp', title: 'Beach Vibe 21' },
    { id: 22, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4160_27ea6cac.webp', title: 'Beach Vibe 22' },
    { id: 23, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4185_7e5b6ef4.webp', title: 'Beach Vibe 23' },
    { id: 24, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4187_c204dce0.webp', title: 'Beach Vibe 24' },
    { id: 25, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4207_ef76c0c6.webp', title: 'Beach Vibe 25' },
    { id: 26, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4210_24e6772c.webp', title: 'Beach Vibe 26' },
    { id: 27, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4212_9194069d.webp', title: 'Beach Vibe 27' },
    { id: 28, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4216_368061cc.webp', title: 'Beach Vibe 28' },
    { id: 29, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4222_d3b1a199.webp', title: 'Beach Vibe 29' },
    { id: 30, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4230_896054ad.webp', title: 'Beach Vibe 30' },
    { id: 31, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4234_c6f4f750.webp', title: 'Beach Vibe 31' },
    { id: 32, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4238_443891cc.webp', title: 'Beach Vibe 32' },
    { id: 33, src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555156662/c35Hsdmsi3FZfxe79ohzXT/BOB_4277_98cfb168.webp', title: 'Beach Vibe 33' },
    { id: 34, src: 'https://d2xsxph8kpxj0
