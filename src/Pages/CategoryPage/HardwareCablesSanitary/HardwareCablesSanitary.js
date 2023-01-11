import React from 'react';
import { Link } from 'react-router-dom';
import HardwareCablesSanitarySubCategory from '../../../Components/HardwareCablesSanitarySubCategory/HardwareCablesSanitarySubCategory';
import './HardwareCablesSanitary.css';

const HardwareCablesSanitary = () => {
  return (
    <>
    <div className="hardware_cables_sanitary_container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
          Hardware Cables Sanitary
          </li>
        </ol>
      </nav>
      <div>
        <HardwareCablesSanitarySubCategory></HardwareCablesSanitarySubCategory>
      </div>
    </div>
  </>
  );
};

export default HardwareCablesSanitary;