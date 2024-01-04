"use client"

import Link from 'next/link';
import * as React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Truck from "public/truck2.png";
import { useRouter } from 'next/navigation';
import {Button} from '@mui/material';
import { TruckIcon } from '@heroicons/react/24/outline';
export default function Page() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        {/* Apply Tailwind CSS classes for size and rounded border */}
        <div className=" overflow-hidden">
          <Image src={Truck} alt="" className="h-84 w-65" />
        </div>
      </div>
      <div className={styles.desc}>
        <Link href="/dashboard/trucklogs">Check-In</Link>
      </div>
    </div>
  );
}
