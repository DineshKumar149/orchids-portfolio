export interface Part {
  id: string;
  name: string;
  description: string;
  material: string;
  quantity: number;
  image: string;
}

export interface AssemblyStep {
  step: number;
  title: string;
  description: string;
  image: string;
}

export interface Model3D {
  name: string;
  type: "part" | "assembly";
  fileFormat: string;
  downloadUrl?: string;
  previewImage: string;
  polyCount?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tools: string[];
  image: string;
  features: string[];
  specifications: Record<string, string>;
  parts: Part[];
  assemblySteps: AssemblyStep[];
  models3D: Model3D[];
}

export const projects: Project[] = [
  {
    id: "bicycle-3d-design",
    title: "Bicycle 3D Design",
    description: "Complete 3D assembly of a bicycle with detailed components including frame, wheels, gears, and suspension system.",
    longDescription: "This project involved the comprehensive 3D design and assembly of a high-performance mountain bike. The design process focused on structural integrity, ergonomic efficiency, and manufacturability. Every component, from the intricate gear system to the robust frame geometry, was meticulously modeled to meet industry standards. The assembly includes functional kinematics for the suspension and steering systems, ensuring a realistic representation of the final product.",
    category: "Product Design",
    tools: ["SolidWorks", "Simulation", "Photoview 360"],
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&h=600&fit=crop",
    features: [
      "Advanced frame geometry for optimal weight distribution",
      "Fully functional 21-speed gear system assembly",
      "Front and rear hydraulic disc brake modeling",
      "Ergonomic handlebar and saddle design",
      "Detailed tire tread patterns and wheel spoke lacing"
    ],
    specifications: {
      "Software": "SolidWorks 2023",
      "Components": "150+ individual parts",
      "Materials": "6061 Aluminum Alloy, Carbon Fiber",
      "Analysis Type": "Static Structural, Kinematics"
    },
    parts: [
      {
        id: "frame",
        name: "Main Frame",
        description: "Hydroformed aluminum alloy frame with integrated cable routing and optimized stress distribution geometry. Features double-butted tubes for weight reduction.",
        material: "6061-T6 Aluminum Alloy",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=400&h=300&fit=crop"
      },
      {
        id: "front-fork",
        name: "Front Suspension Fork",
        description: "Air-sprung suspension fork with 120mm travel, adjustable rebound damping, and lockout feature. Includes stanchion tubes and crown assembly.",
        material: "Magnesium Alloy, Carbon Fiber",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
      },
      {
        id: "wheel-assembly",
        name: "Wheel Assembly",
        description: "Double-wall aluminum rim with 32 stainless steel spokes in a 3-cross lacing pattern. Includes sealed cartridge bearing hub.",
        material: "Aluminum Alloy, Stainless Steel",
        quantity: 2,
        image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=400&h=300&fit=crop"
      },
      {
        id: "crankset",
        name: "Crankset Assembly",
        description: "Hollow-forged aluminum crank arms with spider-mounted chainrings (42/32/22T). Includes external bottom bracket bearings.",
        material: "7075 Aluminum Alloy",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop"
      },
      {
        id: "derailleur-rear",
        name: "Rear Derailleur",
        description: "11-speed rear derailleur with shadow+ clutch mechanism for chain retention. Features adjustable B-tension and limit screws.",
        material: "Aluminum Alloy, Steel",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=300&fit=crop"
      },
      {
        id: "brake-caliper",
        name: "Hydraulic Disc Brake Caliper",
        description: "Four-piston hydraulic caliper with sintered metallic brake pads. Includes 180mm floating rotor design.",
        material: "Forged Aluminum, Steel",
        quantity: 2,
        image: "https://images.unsplash.com/photo-1596738101942-7cd8e tried5da?w=400&h=300&fit=crop"
      },
      {
        id: "handlebar",
        name: "Handlebar Assembly",
        description: "Wide riser handlebar (780mm) with ergonomic backsweep. Includes stem, grips, and integrated cable guides.",
        material: "Carbon Fiber Composite",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1559348349-86f1f65817fe?w=400&h=300&fit=crop"
      },
      {
        id: "saddle",
        name: "Saddle & Seatpost",
        description: "Ergonomic saddle with titanium rails and pressure-relief channel. Dropper seatpost with 150mm travel.",
        material: "Carbon Rails, Alloy Post",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400&h=300&fit=crop"
      }
    ],
    assemblySteps: [
      {
        step: 1,
        title: "Frame Preparation",
        description: "Begin with the main frame assembly. Install the headset bearings into the head tube and press-fit the bottom bracket into the shell. Ensure all threads are properly chased and faced.",
        image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&h=400&fit=crop"
      },
      {
        step: 2,
        title: "Fork Installation",
        description: "Insert the steerer tube through the head tube. Install the crown race, compression ring, and top cap. Cut the steerer to appropriate length and install the stem.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
      },
      {
        step: 3,
        title: "Wheel Assembly",
        description: "Mount tires onto rims with proper orientation. Install the cassette onto the freehub body. Insert the wheels into the dropouts and secure with thru-axles.",
        image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=600&h=400&fit=crop"
      },
      {
        step: 4,
        title: "Drivetrain Installation",
        description: "Install the crankset onto the bottom bracket spindle. Mount the front and rear derailleurs. Thread and route the chain through the drivetrain.",
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop"
      },
      {
        step: 5,
        title: "Brake System Setup",
        description: "Mount brake calipers to frame and fork mounts. Install rotors onto wheel hubs. Route hydraulic hoses and bleed the brake system.",
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&h=400&fit=crop"
      },
      {
        step: 6,
        title: "Cockpit & Final Assembly",
        description: "Install handlebar, grips, and controls. Mount the saddle and seatpost. Connect all cables, adjust derailleurs, and perform final safety checks.",
        image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&h=400&fit=crop"
      }
    ],
    models3D: [
      {
        name: "Complete Bicycle Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP / IGES",
        previewImage: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&h=400&fit=crop",
        polyCount: "2.4M polygons"
      },
      {
        name: "Frame Sub-Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP",
        previewImage: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&h=400&fit=crop",
        polyCount: "850K polygons"
      },
      {
        name: "Wheel Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP",
        previewImage: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=600&h=400&fit=crop",
        polyCount: "620K polygons"
      },
      {
        name: "Drivetrain Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP",
        previewImage: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop",
        polyCount: "480K polygons"
      }
    ]
  },
  {
    id: "six-cylinder-radial-engine",
    title: "Six-Cylinder Radial Engine",
    description: "Advanced radial engine design featuring six cylinders arranged in a circular pattern with complete motion simulation.",
    longDescription: "A sophisticated engineering project focusing on the design and simulation of a six-cylinder radial engine. This assembly demonstrates complex mechanical relationships, including the master-and-articulated rod system characteristic of radial engines. The project involved rigorous stress analysis on the crankshaft and connecting rods, as well as thermal analysis on the cylinder heads to ensure operational reliability under high-load conditions.",
    category: "Mechanical Assembly",
    tools: ["SolidWorks", "ANSYS", "Motion Study"],
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
    features: [
      "Precise master rod and five articulated rod assembly",
      "Dynamic valve timing mechanism (cam plate and pushrods)",
      "Internal lubrication channel modeling",
      "High-fidelity cooling fin geometry on cylinder heads",
      "Realistic motion simulation with varying RPM inputs"
    ],
    specifications: {
      "Engine Type": "6-Cylinder Radial",
      "Displacement": "4.5 Liters (Simulated)",
      "Materials": "Forged Steel, Aluminum Alloy",
      "Simulations": "Dynamic Motion, Thermal Stress"
    },
    parts: [
      {
        id: "crankcase",
        name: "Crankcase Housing",
        description: "Central crankcase with radially-arranged cylinder mounting bosses. Features integrated oil galleries and main bearing journals.",
        material: "Cast Aluminum Alloy",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop"
      },
      {
        id: "crankshaft",
        name: "Single-Throw Crankshaft",
        description: "Forged steel crankshaft with single crank pin for master rod attachment. Includes counterweights and oil passages.",
        material: "4340 Forged Steel",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
      },
      {
        id: "master-rod",
        name: "Master Connecting Rod",
        description: "Primary connecting rod with big-end bearing and five articulated rod attachment points arranged radially.",
        material: "4340 Forged Steel",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=300&fit=crop"
      },
      {
        id: "articulated-rod",
        name: "Articulated Connecting Rod",
        description: "Secondary connecting rods that pivot on the master rod knuckle pins. Features bronze bushings at both ends.",
        material: "4340 Forged Steel",
        quantity: 5,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop"
      },
      {
        id: "cylinder",
        name: "Cylinder Barrel",
        description: "Air-cooled cylinder with deep cooling fins and hardened steel liner. Includes intake and exhaust ports.",
        material: "Aluminum Alloy w/ Steel Liner",
        quantity: 6,
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop"
      },
      {
        id: "piston",
        name: "Piston Assembly",
        description: "Forged aluminum piston with three ring grooves (2 compression, 1 oil). Includes wrist pin and circlips.",
        material: "Forged Aluminum Alloy",
        quantity: 6,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
      },
      {
        id: "cam-plate",
        name: "Cam Plate",
        description: "Stationary cam plate with intake and exhaust lobes for pushrod actuation. Mounted to crankcase nose section.",
        material: "Hardened Steel",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop"
      },
      {
        id: "propeller-hub",
        name: "Propeller Hub & Reduction Gear",
        description: "Front-mounted propeller attachment hub with planetary gear reduction system for optimal propeller speed.",
        material: "Steel, Aluminum Alloy",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=300&fit=crop"
      }
    ],
    assemblySteps: [
      {
        step: 1,
        title: "Crankcase Preparation",
        description: "Begin with the crankcase halves. Install main bearing shells and oil seals. Mate the crankcase halves and torque fasteners to specification.",
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop"
      },
      {
        step: 2,
        title: "Crankshaft Installation",
        description: "Install the single-throw crankshaft into the main bearings. Check end-play and install thrust washers. Mount the cam drive gear.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
      },
      {
        step: 3,
        title: "Master & Articulated Rod Assembly",
        description: "Assemble the articulated rods to the master rod using knuckle pins. Install the complete rod assembly onto the crankpin bearing.",
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&h=400&fit=crop"
      },
      {
        step: 4,
        title: "Piston & Cylinder Installation",
        description: "Install piston rings and attach pistons to connecting rods. Slide cylinder barrels over pistons and secure to crankcase.",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop"
      },
      {
        step: 5,
        title: "Valvetrain Assembly",
        description: "Install the cam plate to the crankcase nose. Mount pushrods, rocker arms, and valve assemblies to each cylinder head.",
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop"
      },
      {
        step: 6,
        title: "Final Assembly & Testing",
        description: "Install ignition system, carburetor, and propeller hub. Perform compression test and motion simulation verification.",
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop"
      }
    ],
    models3D: [
      {
        name: "Complete Engine Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP / IGES",
        previewImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop",
        polyCount: "3.2M polygons"
      },
      {
        name: "Crankshaft & Rod Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP",
        previewImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        polyCount: "780K polygons"
      },
      {
        name: "Single Cylinder Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP",
        previewImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop",
        polyCount: "420K polygons"
      }
    ]
  },
  {
    id: "differential-gearbox",
    title: "Differential Gearbox",
    description: "Full differential gearbox assembly with bevel gears, spider gears, and housing designed for automotive applications.",
    longDescription: "This project showcases a complete automotive differential gearbox design. The focus was on gear tooth profile optimization for smooth power transmission and load distribution. The assembly includes the ring gear, pinion gear, and the internal spider gear arrangement that allows for varying wheel speeds during cornering. A detailed housing was designed with integrated bearing supports and lubrication ports, ensuring a realistic and manufacturable assembly.",
    category: "Automotive Design",
    tools: ["SolidWorks", "GearTrax", "ANSYS"],
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
    features: [
      "Optimized spiral bevel gear geometry",
      "Precision-modeled differential carrier assembly",
      "Integrated lubrication system with oil seal paths",
      "High-strength housing design for heavy-duty loads",
      "Simulation of wheel speed variance during turns"
    ],
    specifications: {
      "Gear Type": "Spiral Bevel",
      "Ratio": "3.73:1",
      "Materials": "Hardened Alloy Steel (8620)",
      "Standards": "AGMA / ISO Gear Standards"
    },
    parts: [
      {
        id: "housing",
        name: "Differential Housing",
        description: "Cast iron housing with integrated bearing bores, mounting flanges, and oil fill/drain ports. Includes inspection cover.",
        material: "Ductile Cast Iron",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop"
      },
      {
        id: "ring-gear",
        name: "Ring Gear",
        description: "Large spiral bevel ring gear bolted to the differential carrier. Features optimized tooth profile for quiet operation.",
        material: "8620 Alloy Steel (Carburized)",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
      },
      {
        id: "pinion-gear",
        name: "Pinion Gear & Shaft",
        description: "Input pinion gear with integral shaft. Supported by tapered roller bearings with adjustable preload shims.",
        material: "8620 Alloy Steel (Carburized)",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=300&fit=crop"
      },
      {
        id: "carrier",
        name: "Differential Carrier",
        description: "Central carrier housing that supports the spider gears and side gears. Bolts to the ring gear.",
        material: "Nodular Cast Iron",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop"
      },
      {
        id: "spider-gear",
        name: "Spider Gears (Pinion Gears)",
        description: "Small bevel gears mounted on the cross pin inside the carrier. Allow differential action between axles.",
        material: "Hardened Alloy Steel",
        quantity: 2,
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop"
      },
      {
        id: "side-gear",
        name: "Side Gears",
        description: "Bevel gears that mesh with spider gears and are splined to the axle shafts. Transfer torque to the wheels.",
        material: "Hardened Alloy Steel",
        quantity: 2,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
      },
      {
        id: "cross-pin",
        name: "Spider Gear Cross Pin",
        description: "Hardened steel pin that supports the spider gears inside the carrier. Retained by a roll pin through the carrier.",
        material: "Case-Hardened Steel",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=300&fit=crop"
      },
      {
        id: "bearings",
        name: "Tapered Roller Bearings",
        description: "Precision tapered roller bearings for pinion and carrier support. Include bearing cups pressed into housing.",
        material: "52100 Bearing Steel",
        quantity: 4,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop"
      }
    ],
    assemblySteps: [
      {
        step: 1,
        title: "Housing Preparation",
        description: "Clean the differential housing and install bearing cups into the bores. Check bore alignment and install oil seals.",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop"
      },
      {
        step: 2,
        title: "Carrier Sub-Assembly",
        description: "Install side gears with thrust washers into the carrier. Insert spider gears onto cross pin and install into carrier.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
      },
      {
        step: 3,
        title: "Ring Gear Installation",
        description: "Heat the ring gear slightly for expansion fit. Bolt the ring gear to the carrier using new fasteners with thread locker.",
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&h=400&fit=crop"
      },
      {
        step: 4,
        title: "Pinion Installation",
        description: "Install pinion bearings with correct shim stack for depth. Press the pinion into the housing and set bearing preload.",
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop"
      },
      {
        step: 5,
        title: "Carrier Installation",
        description: "Install carrier bearings onto the carrier. Set the carrier into the housing and adjust backlash with side shims.",
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop"
      },
      {
        step: 6,
        title: "Final Setup & Testing",
        description: "Check gear contact pattern with marking compound. Adjust shims as needed. Fill with gear oil and perform spin test.",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop"
      }
    ],
    models3D: [
      {
        name: "Complete Differential Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP / IGES",
        previewImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop",
        polyCount: "1.8M polygons"
      },
      {
        name: "Gear Set (Ring & Pinion)",
        type: "assembly",
        fileFormat: "SLDASM / STEP",
        previewImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        polyCount: "520K polygons"
      },
      {
        name: "Carrier Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP",
        previewImage: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop",
        polyCount: "380K polygons"
      }
    ]
  },
  {
    id: "robotic-arm-assembly",
    title: "Robotic Arm Assembly",
    description: "Multi-axis robotic arm with servo motors, joints, and end effector featuring kinematic analysis.",
    longDescription: "A 6-axis industrial robotic arm design intended for precision pick-and-place operations. This project involved complex kinematic modeling to ensure a wide workspace envelope and high accuracy. Each joint was designed with appropriate gear reductions and bearing supports to handle significant payloads. The end effector features a modular design, allowing for various gripping or tooling attachments. Extensive FEA was performed to minimize arm deflection during high-speed movements.",
    category: "Robotics",
    tools: ["SolidWorks", "ANSYS", "MATLAB"],
    image: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=800&h=600&fit=crop",
    features: [
      "6-Degree-of-Freedom (6-DOF) kinematic chain",
      "Integrated cable management channels within arms",
      "Harmonic drive reduction modeling for high torque",
      "Modular end-effector interface",
      "Workspace envelope simulation and singularity analysis"
    ],
    specifications: {
      "Payload": "5.0 kg",
      "Reach": "850 mm",
      "Repeatability": "±0.02 mm",
      "Weight": "28 kg (Total Assembly)"
    },
    parts: [
      {
        id: "base",
        name: "Base Platform",
        description: "Heavy steel base with precision mounting surface. Houses J1 motor and provides stability for the entire arm.",
        material: "Steel, Cast Iron",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=400&h=300&fit=crop"
      },
      {
        id: "shoulder",
        name: "Shoulder Assembly (J1-J2)",
        description: "Primary rotation joint (J1) and shoulder pitch joint (J2). Includes harmonic drives and absolute encoders.",
        material: "Aluminum Alloy, Steel",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
      },
      {
        id: "upper-arm",
        name: "Upper Arm Link",
        description: "Structural link between shoulder and elbow joints. Features internal cable routing and lightweight construction.",
        material: "6061-T6 Aluminum",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=300&fit=crop"
      },
      {
        id: "elbow",
        name: "Elbow Joint Assembly (J3)",
        description: "Elbow pitch joint with integrated motor, harmonic drive, and encoder. Connects upper and lower arm links.",
        material: "Aluminum Alloy, Steel",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop"
      },
      {
        id: "forearm",
        name: "Forearm Link",
        description: "Lower arm section housing J4 rotation motor. Tapered design for reduced inertia at the wrist.",
        material: "6061-T6 Aluminum",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=400&h=300&fit=crop"
      },
      {
        id: "wrist",
        name: "Wrist Assembly (J4-J5-J6)",
        description: "Compact 3-axis wrist providing roll, pitch, and yaw. Uses hollow shaft motors for cable pass-through.",
        material: "Aluminum Alloy",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
      },
      {
        id: "end-effector",
        name: "Gripper End Effector",
        description: "Pneumatic parallel gripper with adjustable finger stroke. Includes tool center point (TCP) flange.",
        material: "Aluminum, Hardened Steel",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=300&fit=crop"
      },
      {
        id: "servo-motor",
        name: "Servo Motors & Drives",
        description: "High-torque brushless servo motors with integrated absolute encoders. Paired with compact servo drives.",
        material: "Various",
        quantity: 6,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop"
      }
    ],
    assemblySteps: [
      {
        step: 1,
        title: "Base Assembly",
        description: "Secure the J1 motor and harmonic drive to the base platform. Install the absolute encoder and wire harness connections.",
        image: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=600&h=400&fit=crop"
      },
      {
        step: 2,
        title: "Shoulder Assembly",
        description: "Mount the shoulder casting to J1 output. Install J2 motor, drive, and bearings. Connect to the base and test rotation.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
      },
      {
        step: 3,
        title: "Upper Arm Installation",
        description: "Attach the upper arm link to J2 output flange. Route internal cables through the arm section. Install arm covers.",
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&h=400&fit=crop"
      },
      {
        step: 4,
        title: "Elbow & Forearm Assembly",
        description: "Install J3 elbow joint to the upper arm. Attach the forearm link and route J4 motor cables through the hollow section.",
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop"
      },
      {
        step: 5,
        title: "Wrist Assembly",
        description: "Mount the 3-axis wrist assembly to the forearm. Install J4, J5, and J6 motors with harmonic drives. Connect encoder cables.",
        image: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=600&h=400&fit=crop"
      },
      {
        step: 6,
        title: "End Effector & Calibration",
        description: "Attach the gripper to the tool flange. Perform encoder calibration and kinematic parameter verification.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
      }
    ],
    models3D: [
      {
        name: "Complete Robot Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP / IGES",
        previewImage: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=600&h=400&fit=crop",
        polyCount: "2.1M polygons"
      },
      {
        name: "Wrist Sub-Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP",
        previewImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        polyCount: "580K polygons"
      },
      {
        name: "Gripper Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP",
        previewImage: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&h=400&fit=crop",
        polyCount: "220K polygons"
      }
    ]
  },
  {
    id: "f1-steering-system",
    title: "F1 Car Steering System",
    description: "Formula 1 racing car steering mechanism with rack and pinion system and adjustable Ackermann geometry.",
    longDescription: "Design of a high-performance steering system for a Formula 1 style racing vehicle. The project focuses on the rack and pinion mechanism, steering column, and tie-rod assemblies. The geometry was optimized for Ackermann steering principles to ensure maximum grip and minimal tire scrub during high-speed cornering. Material selection was critical, utilizing lightweight alloys and carbon fiber composites to reduce unsprung mass while maintaining extreme rigidity.",
    category: "Automotive Design",
    tools: ["SolidWorks", "CFD Analysis", "Simulation"],
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop",
    features: [
      "Variable ratio rack and pinion design",
      "Adjustable tie-rod linkages for toe-in/toe-out",
      "Integrated steering wheel quick-release hub",
      "Ultra-lightweight titanium steering column",
      "FEA verified for high-speed impact loads"
    ],
    specifications: {
      "Steering Type": "Manual Rack & Pinion",
      "Lock-to-Lock": "0.75 Turns",
      "Materials": "7075-T6 Aluminum, Grade 5 Titanium",
      "Weight": "3.2 kg"
    },
    parts: [
      {
        id: "steering-wheel",
        name: "Steering Wheel Assembly",
        description: "Carbon fiber steering wheel with integrated paddle shifters, display, and control buttons. Includes quick-release mechanism.",
        material: "Carbon Fiber, Titanium",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=300&fit=crop"
      },
      {
        id: "steering-column",
        name: "Steering Column",
        description: "Titanium steering column with splined ends and universal joints. Designed for controlled collapse under impact.",
        material: "Grade 5 Titanium",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
      },
      {
        id: "rack-housing",
        name: "Steering Rack Housing",
        description: "Precision-machined housing for the rack and pinion assembly. Includes mounting provisions to the monocoque.",
        material: "7075-T6 Aluminum",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=300&fit=crop"
      },
      {
        id: "rack",
        name: "Steering Rack",
        description: "Helical-cut rack with optimized tooth profile for smooth operation. Features ball joints at both ends.",
        material: "17-4 PH Stainless Steel",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop"
      },
      {
        id: "pinion",
        name: "Steering Pinion",
        description: "Helical pinion gear with integral shaft. Supported by angular contact bearings for zero backlash.",
        material: "17-4 PH Stainless Steel",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=300&fit=crop"
      },
      {
        id: "tie-rod",
        name: "Tie Rods",
        description: "Adjustable tie rods with left and right-hand threads for toe adjustment. Rod ends with high-misalignment capability.",
        material: "4130 Chromoly Steel",
        quantity: 2,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
      },
      {
        id: "u-joint",
        name: "Universal Joints",
        description: "Precision needle-bearing universal joints connecting the steering column sections. Zero backlash design.",
        material: "Hardened Steel",
        quantity: 2,
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=300&fit=crop"
      },
      {
        id: "quick-release",
        name: "Quick-Release Hub",
        description: "Driver-operated quick-release mechanism for rapid steering wheel removal during driver egress.",
        material: "Titanium, Steel",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop"
      }
    ],
    assemblySteps: [
      {
        step: 1,
        title: "Rack Housing Installation",
        description: "Mount the steering rack housing to the front bulkhead of the monocoque. Align with reference datums for proper geometry.",
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&h=400&fit=crop"
      },
      {
        step: 2,
        title: "Rack & Pinion Assembly",
        description: "Install the rack into the housing with PTFE bushings. Mount the pinion with preloaded bearings. Set mesh engagement.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
      },
      {
        step: 3,
        title: "Steering Column Assembly",
        description: "Assemble the steering column sections with universal joints. Install crash energy absorbing elements.",
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&h=400&fit=crop"
      },
      {
        step: 4,
        title: "Column to Pinion Connection",
        description: "Connect the lower steering column to the pinion shaft via universal joint. Set phasing for optimal feel.",
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop"
      },
      {
        step: 5,
        title: "Tie Rod Installation",
        description: "Install tie rods to the rack ends. Connect to steering arms on uprights. Set preliminary toe alignment.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
      },
      {
        step: 6,
        title: "Steering Wheel & Final Setup",
        description: "Install quick-release hub and steering wheel. Verify center position, steering lock angles, and Ackermann geometry.",
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&h=400&fit=crop"
      }
    ],
    models3D: [
      {
        name: "Complete Steering System",
        type: "assembly",
        fileFormat: "SLDASM / STEP / IGES",
        previewImage: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&h=400&fit=crop",
        polyCount: "1.4M polygons"
      },
      {
        name: "Rack & Pinion Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP",
        previewImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        polyCount: "380K polygons"
      },
      {
        name: "Steering Wheel Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP",
        previewImage: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop",
        polyCount: "290K polygons"
      }
    ]
  },
  {
    id: "four-piston-mechanism",
    title: "Four-Piston Mechanism",
    description: "Four-cylinder engine piston mechanism with crankshaft, connecting rods, and cylinder block.",
    longDescription: "A detailed modeling project of a four-cylinder inline engine's reciprocating assembly. This project covers the design of pistons, connecting rods, a multi-journal crankshaft, and the engine block. The focus was on balancing the rotating and reciprocating masses to minimize vibrations. Motion studies were used to verify clearance between moving parts and to analyze the acceleration/velocity profiles of the pistons throughout the combustion cycle.",
    category: "Engine Design",
    tools: ["SolidWorks", "ANSYS", "Motion Study"],
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
    features: [
      "Balanced crankshaft with integrated counterweights",
      "High-compression piston head geometry",
      "Detailed connecting rod with bearing inserts",
      "Sectioned cylinder block for internal view",
      "Synchronized motion simulation (1-3-4-2 firing order)"
    ],
    specifications: {
      "Configuration": "Inline-4",
      "Bore x Stroke": "86mm x 86mm",
      "Compression Ratio": "11.5:1",
      "Max RPM": "8000 (Simulated)"
    },
    parts: [
      {
        id: "cylinder-block",
        name: "Cylinder Block",
        description: "Open-deck aluminum block with cast-iron cylinder liners. Features integrated water jacket and oil galleries.",
        material: "Aluminum Alloy w/ Cast Iron Liners",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop"
      },
      {
        id: "crankshaft-4cyl",
        name: "Crankshaft",
        description: "Forged steel crankshaft with five main journals and four crank pins. Features integral counterweights for primary balance.",
        material: "4340 Forged Steel",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
      },
      {
        id: "piston-4cyl",
        name: "Pistons",
        description: "Forged aluminum pistons with dome profile for high compression. Three-ring design with full-floating wrist pin.",
        material: "2618 Forged Aluminum",
        quantity: 4,
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=300&fit=crop"
      },
      {
        id: "con-rod",
        name: "Connecting Rods",
        description: "H-beam forged steel connecting rods with ARP fasteners. Features floating big-end bearing inserts.",
        material: "4340 Forged Steel",
        quantity: 4,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop"
      },
      {
        id: "main-bearing",
        name: "Main Bearings",
        description: "Tri-metal main bearing shells with thrust faces on center bearing. Oil groove design for full-film lubrication.",
        material: "Aluminum-Tin-Silicon Alloy",
        quantity: 5,
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop"
      },
      {
        id: "wrist-pin",
        name: "Wrist Pins",
        description: "Hardened floating wrist pins with DLC coating. Retained by circlips in piston bosses.",
        material: "52100 Steel (DLC Coated)",
        quantity: 4,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
      },
      {
        id: "piston-rings",
        name: "Piston Ring Sets",
        description: "Three-piece ring set: compression ring, second ring with taper face, and oil control ring with expander.",
        material: "Cast Iron, Steel",
        quantity: 4,
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=300&fit=crop"
      },
      {
        id: "main-caps",
        name: "Main Bearing Caps",
        description: "Billet steel main caps with cross-bolted design for rigidity. Register fit to block for precise alignment.",
        material: "4140 Steel",
        quantity: 5,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop"
      }
    ],
    assemblySteps: [
      {
        step: 1,
        title: "Block Preparation",
        description: "Clean the cylinder block and install main bearing shells. Ensure oil holes are aligned with block passages.",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop"
      },
      {
        step: 2,
        title: "Crankshaft Installation",
        description: "Lay the crankshaft into the main journals. Install thrust washers at center main. Torque main caps to specification.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
      },
      {
        step: 3,
        title: "Piston Assembly",
        description: "Install piston rings with proper orientation. Insert wrist pins through piston and connecting rod. Install circlips.",
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&h=400&fit=crop"
      },
      {
        step: 4,
        title: "Connecting Rod Installation",
        description: "Install rod bearing shells. Use a ring compressor to insert pistons into bores. Torque rod cap bolts.",
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop"
      },
      {
        step: 5,
        title: "Clearance Verification",
        description: "Check crankshaft end-play and bearing clearances using Plastigage. Verify piston-to-wall clearance.",
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop"
      },
      {
        step: 6,
        title: "Motion Simulation Setup",
        description: "Apply motion constraints to the assembly. Run dynamic simulation to verify clearances and analyze motion profiles.",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop"
      }
    ],
    models3D: [
      {
        name: "Complete Short Block Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP / IGES",
        previewImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop",
        polyCount: "1.9M polygons"
      },
      {
        name: "Crankshaft Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP",
        previewImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        polyCount: "420K polygons"
      },
      {
        name: "Piston & Rod Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP",
        previewImage: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&h=400&fit=crop",
        polyCount: "180K polygons"
      }
    ]
  },
  {
    id: "shock-absorber",
    title: "Shock Absorber",
    description: "Complete shock absorber design with spring, damper, and mounting hardware featuring FEA analysis.",
    longDescription: "Design of a high-performance mono-tube shock absorber for automotive suspension. This project involved detailed modeling of the internal valving, piston, and gas chamber. The outer housing was designed for optimal heat dissipation during sustained use. Extensive Finite Element Analysis (FEA) was conducted on the coil spring to determine the spring rate and fatigue life, while the mounting eyes were stress-tested for maximum load conditions.",
    category: "Automotive Design",
    tools: ["SolidWorks", "ANSYS FEA"],
    image: "https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?w=800&h=600&fit=crop",
    features: [
      "Adjustable preload collar mechanism",
      "Progressive rate coil spring modeling",
      "Internal shim stack and piston valve design",
      "Nitrogen reservoir integration",
      "Detailed seal and bushing assembly"
    ],
    specifications: {
      "Type": "Gas-Charged Mono-tube",
      "Stroke": "120 mm",
      "Spring Rate": "450 lbs/in",
      "Damping": "Adjustable Compression/Rebound"
    },
    parts: [
      {
        id: "shock-body",
        name: "Shock Body Tube",
        description: "Precision-honed aluminum body tube with external cooling fins. Houses the damping piston and oil column.",
        material: "6061-T6 Aluminum",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?w=400&h=300&fit=crop"
      },
      {
        id: "piston-rod",
        name: "Piston Rod",
        description: "Chrome-plated steel piston rod with polished surface finish for seal longevity. Features internal oil passages.",
        material: "Hard Chrome Plated Steel",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
      },
      {
        id: "damping-piston",
        name: "Damping Piston",
        description: "Multi-port damping piston with shim stack valving for compression and rebound control. PTFE piston band for sealing.",
        material: "Aluminum Alloy",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=300&fit=crop"
      },
      {
        id: "coil-spring",
        name: "Coil Spring",
        description: "Progressive-rate coil spring with shot-peened finish for fatigue resistance. Features flat-ground ends for stable seating.",
        material: "Chrome Silicon Steel",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop"
      },
      {
        id: "spring-seat",
        name: "Spring Seats & Preload Collar",
        description: "Upper and lower spring seats with threaded preload adjustment collar. Allows ride height adjustment.",
        material: "6061 Aluminum (Anodized)",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?w=400&h=300&fit=crop"
      },
      {
        id: "gas-cap",
        name: "Gas Chamber & Floating Piston",
        description: "Nitrogen-charged chamber with IFP (Internal Floating Piston) to separate oil and gas. Maintains consistent damping.",
        material: "Aluminum, Buna-N Seals",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
      },
      {
        id: "seal-head",
        name: "Seal Head Assembly",
        description: "Multi-lip seal head with rod guide bushing. Features wiper seal, main oil seal, and back-up ring.",
        material: "Bronze, PTFE, Buna-N",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=300&fit=crop"
      },
      {
        id: "mounting-eyes",
        name: "Mounting Eyes & Bushings",
        description: "Spherical bearing mounting eyes for articulation. Includes rubber or spherical bushings for NVH isolation.",
        material: "4130 Chromoly Steel",
        quantity: 2,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop"
      }
    ],
    assemblySteps: [
      {
        step: 1,
        title: "Body Tube Preparation",
        description: "Inspect and clean the shock body tube. Install the base valve assembly at the bottom of the tube.",
        image: "https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?w=600&h=400&fit=crop"
      },
      {
        step: 2,
        title: "Piston Assembly",
        description: "Install shim stacks onto the damping piston. Thread the piston onto the rod and torque to specification.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
      },
      {
        step: 3,
        title: "Rod & Piston Installation",
        description: "Insert the piston rod assembly into the body tube. Install the seal head and secure with snap ring.",
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&h=400&fit=crop"
      },
      {
        step: 4,
        title: "Oil Fill & Gas Charge",
        description: "Fill the shock with damping oil. Install the IFP and charge the gas chamber with nitrogen to specified pressure.",
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop"
      },
      {
        step: 5,
        title: "Spring Installation",
        description: "Slide the coil spring over the body. Install the spring seats and thread on the preload collar.",
        image: "https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?w=600&h=400&fit=crop"
      },
      {
        step: 6,
        title: "Final Assembly & Testing",
        description: "Install mounting eye hardware. Perform dyno testing to verify damping curves match specifications.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
      }
    ],
    models3D: [
      {
        name: "Complete Shock Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP / IGES",
        previewImage: "https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?w=600&h=400&fit=crop",
        polyCount: "680K polygons"
      },
      {
        name: "Damper Cartridge",
        type: "assembly",
        fileFormat: "SLDASM / STEP",
        previewImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        polyCount: "320K polygons"
      },
      {
        name: "Coil Spring",
        type: "part",
        fileFormat: "SLDPRT / STEP",
        previewImage: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop",
        polyCount: "180K polygons"
      }
    ]
  },
  {
    id: "conveyor-system",
    title: "Conveyor System",
    description: "Industrial roller conveyor system with drive mechanism, support structure, and automated sorting.",
    longDescription: "An industrial-scale conveyor system designed for warehouse automation. The project includes a modular framework, drive motor assemblies, and precision-aligned rollers. The design incorporates safety features such as emergency stop placements and protective guards. The sorting mechanism utilizes pneumatic actuators for high-speed material routing. The entire assembly was optimized for easy maintenance and rapid component replacement.",
    category: "Industrial Design",
    tools: ["SolidWorks", "Simulation"],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    features: [
      "Modular frame design for scalable layouts",
      "High-torque motor and chain drive assembly",
      "Low-friction precision roller bearings",
      "Pneumatic sorting arm integration",
      "Ergonomic maintenance access points"
    ],
    specifications: {
      "Throughput": "120 units/minute",
      "Max Load": "50 kg per meter",
      "Belt Speed": "0.5 - 2.0 m/s",
      "Power": "1.5 kW Gearmotor"
    },
    parts: [
      {
        id: "frame-section",
        name: "Frame Section",
        description: "Modular aluminum extrusion frame section with integrated T-slot for accessory mounting. Includes leg assemblies.",
        material: "6063-T5 Aluminum Extrusion",
        quantity: 10,
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop"
      },
      {
        id: "conveyor-roller",
        name: "Conveyor Rollers",
        description: "Precision-ground steel rollers with sealed ball bearings. Hex shaft ends for sprocket or belt drive.",
        material: "Steel Tube, Zinc Plated",
        quantity: 50,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
      },
      {
        id: "drive-motor",
        name: "Gearmotor Assembly",
        description: "Helical bevel gearmotor with variable frequency drive compatibility. Includes motor mount and coupling.",
        material: "Cast Iron, Steel",
        quantity: 2,
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=300&fit=crop"
      },
      {
        id: "drive-chain",
        name: "Roller Chain & Sprockets",
        description: "ANSI 40 roller chain with hardened sprockets for roller drive. Includes chain tensioners.",
        material: "Alloy Steel",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop"
      },
      {
        id: "side-guide",
        name: "Side Guide Rails",
        description: "Adjustable UHMW side guides for product tracking. Quick-release brackets for width adjustment.",
        material: "UHMW Polyethylene, Aluminum",
        quantity: 20,
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop"
      },
      {
        id: "sorting-arm",
        name: "Pneumatic Sorting Arm",
        description: "High-speed pneumatic diverter arm with polyurethane pusher pad. Includes solenoid valve and sensor bracket.",
        material: "Aluminum, Polyurethane",
        quantity: 4,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
      },
      {
        id: "sensor",
        name: "Photoelectric Sensors",
        description: "Retroreflective photoelectric sensors for product detection and counting. Includes mounting brackets.",
        material: "ABS Housing",
        quantity: 8,
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=300&fit=crop"
      },
      {
        id: "safety-guard",
        name: "Safety Guards & E-Stops",
        description: "Polycarbonate safety guards with emergency stop push buttons. OSHA compliant design.",
        material: "Polycarbonate, ABS",
        quantity: 6,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop"
      }
    ],
    assemblySteps: [
      {
        step: 1,
        title: "Frame Assembly",
        description: "Assemble the modular frame sections and level with adjustable feet. Connect sections with splice plates.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop"
      },
      {
        step: 2,
        title: "Roller Installation",
        description: "Install conveyor rollers into frame channels. Set proper spacing and secure with retaining clips.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
      },
      {
        step: 3,
        title: "Drive System",
        description: "Mount the gearmotor to the frame. Install sprockets and thread roller chain. Set chain tension.",
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&h=400&fit=crop"
      },
      {
        step: 4,
        title: "Side Guides & Sensors",
        description: "Install adjustable side guides and photoelectric sensors at key positions. Wire sensors to control panel.",
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop"
      },
      {
        step: 5,
        title: "Sorting Arms",
        description: "Mount pneumatic sorting arms at divert points. Connect air lines and solenoid valves.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
      },
      {
        step: 6,
        title: "Safety & Commissioning",
        description: "Install safety guards and E-stop stations. Perform system commissioning and throughput testing.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop"
      }
    ],
    models3D: [
      {
        name: "Complete Conveyor System",
        type: "assembly",
        fileFormat: "SLDASM / STEP / IGES",
        previewImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
        polyCount: "2.8M polygons"
      },
      {
        name: "Drive Station Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP",
        previewImage: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&h=400&fit=crop",
        polyCount: "450K polygons"
      },
      {
        name: "Sorting Station",
        type: "assembly",
        fileFormat: "SLDASM / STEP",
        previewImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        polyCount: "280K polygons"
      }
    ]
  },
  {
    id: "ball-roller-mechanism",
    title: "Ball Roller Mechanism",
    description: "Innovative ball roller mechanism demonstrating energy transfer and motion dynamics with precise bearing design.",
    longDescription: "This project explores the mechanics of energy transfer using a custom-designed ball roller mechanism. It features a complex path for spherical elements, utilizing gravity and kinetic energy to maintain continuous motion. The design required extreme precision in the track geometry to ensure zero-collision operation and minimal energy loss due to friction. It serves as an excellent demonstration of mechanical timing and precise manufacturing requirements.",
    category: "Mechanism Design",
    tools: ["SolidWorks", "Motion Study"],
    image: "https://images.unsplash.com/photo-1516996087931-5ae405802f9f?w=800&h=600&fit=crop",
    features: [
      "Precision-milled helical track geometry",
      "Low-friction ball recirculation system",
      "Integrated energy capture mechanism",
      "Visible internal workings for educational demo",
      "Vibration-isolated support structure"
    ],
    specifications: {
      "Track Length": "1.2 meters",
      "Ball Diameter": "25 mm",
      "Material": "Polished Stainless Steel",
      "Cycle Time": "15 seconds"
    },
    parts: [
      {
        id: "base-frame",
        name: "Base Frame Structure",
        description: "Welded steel base frame with vibration-dampening rubber feet. Provides stable support for the mechanism.",
        material: "Powder-Coated Steel",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1516996087931-5ae405802f9f?w=400&h=300&fit=crop"
      },
      {
        id: "helical-track",
        name: "Helical Track Sections",
        description: "CNC-machined helical track segments with polished rolling surface. Modular design for easy assembly.",
        material: "304 Stainless Steel",
        quantity: 4,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
      },
      {
        id: "ball-elements",
        name: "Precision Ball Elements",
        description: "Grade 25 precision steel balls with mirror-polished finish for minimal friction and consistent performance.",
        material: "52100 Chrome Steel",
        quantity: 12,
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=300&fit=crop"
      },
      {
        id: "lift-mechanism",
        name: "Ball Lift Mechanism",
        description: "Motor-driven ball elevator with timing belt and soft-grip carriers. Returns balls to start position.",
        material: "Aluminum, Polyurethane",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop"
      },
      {
        id: "track-supports",
        name: "Track Support Brackets",
        description: "Adjustable aluminum brackets for track alignment. Feature slotted holes for fine-tuning.",
        material: "6061 Aluminum",
        quantity: 8,
        image: "https://images.unsplash.com/photo-1516996087931-5ae405802f9f?w=400&h=300&fit=crop"
      },
      {
        id: "timing-gate",
        name: "Ball Timing Gates",
        description: "Precision timing gates that release balls at controlled intervals. Ensures proper spacing during operation.",
        material: "Acetal (Delrin)",
        quantity: 3,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
      }
    ],
    assemblySteps: [
      {
        step: 1,
        title: "Base Frame Setup",
        description: "Assemble the base frame and level with adjustable feet. Install vibration isolation mounts.",
        image: "https://images.unsplash.com/photo-1516996087931-5ae405802f9f?w=600&h=400&fit=crop"
      },
      {
        step: 2,
        title: "Track Installation",
        description: "Mount the helical track sections to support brackets. Align track joints for seamless ball transition.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
      },
      {
        step: 3,
        title: "Lift Mechanism",
        description: "Install the ball lift mechanism at the collection point. Connect motor and adjust timing belt tension.",
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&h=400&fit=crop"
      },
      {
        step: 4,
        title: "Timing Gates",
        description: "Install and calibrate timing gates at release points. Set proper spacing interval for smooth operation.",
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop"
      },
      {
        step: 5,
        title: "Ball Loading",
        description: "Load precision balls into the system. Verify smooth rolling throughout the entire track.",
        image: "https://images.unsplash.com/photo-1516996087931-5ae405802f9f?w=600&h=400&fit=crop"
      },
      {
        step: 6,
        title: "System Tuning",
        description: "Fine-tune track angles and timing gates. Run motion study to verify cycle time and energy efficiency.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
      }
    ],
    models3D: [
      {
        name: "Complete Mechanism Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP / IGES",
        previewImage: "https://images.unsplash.com/photo-1516996087931-5ae405802f9f?w=600&h=400&fit=crop",
        polyCount: "920K polygons"
      },
      {
        name: "Helical Track Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP",
        previewImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        polyCount: "380K polygons"
      },
      {
        name: "Lift Mechanism",
        type: "assembly",
        fileFormat: "SLDASM / STEP",
        previewImage: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&h=400&fit=crop",
        polyCount: "210K polygons"
      }
    ]
  },
  {
    id: "two-stage-reducer",
    title: "Two-Stage Reducer Gearbox",
    description: "Compact two-stage gear reduction system with optimized gear ratios and housing design.",
    longDescription: "Design and optimization of a heavy-duty two-stage gear reducer for industrial machinery. The project involved calculating optimal gear ratios for maximum efficiency and torque output. The housing was designed for high structural rigidity to maintain gear alignment under peak loads. Features include integrated bearing bores, lubrication channels, and a robust mounting flange. Stress analysis was performed on all gear teeth using AGMA standards.",
    category: "Power Transmission",
    tools: ["SolidWorks", "GearTrax", "ANSYS"],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
    features: [
      "High-precision helical gear sets",
      "Dual-stage reduction for high torque density",
      "Robust cast-iron housing design",
      "Splash-style internal lubrication system",
      "Standardized NEMA motor mounting interface"
    ],
    specifications: {
      "Reduction Ratio": "15:1",
      "Input Torque": "250 Nm",
      "Efficiency": "96%",
      "Lubricant": "ISO VG 220 Gear Oil"
    },
    parts: [
      {
        id: "housing-body",
        name: "Gearbox Housing",
        description: "Split cast-iron housing with precision-machined bearing bores and oil galleries. Includes inspection port.",
        material: "Gray Cast Iron (GG25)",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop"
      },
      {
        id: "input-shaft",
        name: "Input Shaft & Pinion",
        description: "High-speed input shaft with integral helical pinion. Splined end for motor coupling connection.",
        material: "4140 Alloy Steel (Hardened)",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
      },
      {
        id: "intermediate-shaft",
        name: "Intermediate Shaft",
        description: "Layshaft with large gear and small pinion for second stage reduction. Supported by tapered roller bearings.",
        material: "4340 Alloy Steel",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=300&fit=crop"
      },
      {
        id: "output-shaft",
        name: "Output Shaft & Bull Gear",
        description: "Low-speed output shaft with large helical gear. Keyed end for driven equipment connection.",
        material: "4340 Alloy Steel",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop"
      },
      {
        id: "gear-bearings",
        name: "Tapered Roller Bearings",
        description: "Heavy-duty tapered roller bearings for shaft support. Includes adjustable spacers for preload setting.",
        material: "52100 Bearing Steel",
        quantity: 6,
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop"
      },
      {
        id: "oil-seals",
        name: "Oil Seals & Gaskets",
        description: "Double-lip oil seals at shaft exits and RTV gaskets for housing halves. Prevents lubricant leakage.",
        material: "Viton, Silicone",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
      },
      {
        id: "motor-flange",
        name: "Motor Mounting Flange",
        description: "NEMA C-face motor adapter flange with pilot diameter. Includes flexible jaw coupling.",
        material: "Ductile Iron",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=300&fit=crop"
      },
      {
        id: "breather",
        name: "Breather & Level Sight",
        description: "Filtered breather vent for pressure equalization. Oil level sight glass for maintenance checks.",
        material: "Brass, Glass",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop"
      }
    ],
    assemblySteps: [
      {
        step: 1,
        title: "Housing Preparation",
        description: "Clean housing halves and apply sealant to mating surfaces. Install bearing cups into precision bores.",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop"
      },
      {
        step: 2,
        title: "Input Shaft Installation",
        description: "Press bearings onto the input shaft. Install shaft into housing and set bearing preload with shims.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
      },
      {
        step: 3,
        title: "Intermediate Shaft Assembly",
        description: "Install intermediate shaft with gear set. Verify proper mesh with input pinion. Set bearing preload.",
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&h=400&fit=crop"
      },
      {
        step: 4,
        title: "Output Shaft Installation",
        description: "Install output shaft and bull gear. Check backlash with intermediate pinion. Torque bearing retainers.",
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop"
      },
      {
        step: 5,
        title: "Housing Closure",
        description: "Apply RTV sealant and close housing halves. Torque fasteners in star pattern. Install shaft seals.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
      },
      {
        step: 6,
        title: "Final Assembly & Testing",
        description: "Install motor flange and breather. Fill with gear oil. Run-in test and check for leaks and temperature.",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop"
      }
    ],
    models3D: [
      {
        name: "Complete Gearbox Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP / IGES",
        previewImage: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
        polyCount: "1.6M polygons"
      },
      {
        name: "Gear Train Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP",
        previewImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        polyCount: "680K polygons"
      },
      {
        name: "Housing (Sectioned)",
        type: "part",
        fileFormat: "SLDPRT / STEP",
        previewImage: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&h=400&fit=crop",
        polyCount: "420K polygons"
      }
    ]
  },
  {
    id: "drone-assembly",
    title: "Drone Assembly",
    description: "Lightweight carbon fiber drone frame with motor mounts, battery housing, and electronics bay.",
    longDescription: "A high-performance quadcopter drone design focused on structural optimization and aerodynamic efficiency. The frame utilizes an X-configuration for balanced flight characteristics. Every component was analyzed for weight reduction without sacrificing stiffness, using carbon fiber composite materials. The design includes dedicated vibration-damped mounts for the flight controller and camera gimbal, as well as integrated airflow paths for motor cooling.",
    category: "Aerospace Design",
    tools: ["SolidWorks", "CFD", "FEA"],
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop",
    features: [
      "Ultra-stiff carbon fiber laminate frame",
      "Aerodynamic motor arm cross-sections",
      "Quick-release battery tray mechanism",
      "3-Axis brushless gimbal integration",
      "Internal routing for all electrical wiring"
    ],
    specifications: {
      "Wheelbase": "250 mm",
      "Empty Weight": "320g",
      "Max Thrust": "4.2 kg (Total)",
      "Materials": "3K Carbon Fiber, 7075 Aluminum"
    },
    parts: [
      {
        id: "center-plate",
        name: "Center Plate Assembly",
        description: "Main structural plate with integrated standoffs for electronics stacking. CNC-cut from carbon fiber sheet.",
        material: "3K Twill Carbon Fiber",
        quantity: 2,
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop"
      },
      {
        id: "motor-arm",
        name: "Motor Arms",
        description: "Aerodynamic profile carbon fiber arms with aluminum motor mounts. Features internal wire channels.",
        material: "Carbon Fiber, 7075 Aluminum",
        quantity: 4,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
      },
      {
        id: "motor",
        name: "Brushless Motors",
        description: "High-KV brushless outrunner motors with integrated prop adapters. Optimized for 5-inch propellers.",
        material: "Aluminum, Neodymium Magnets",
        quantity: 4,
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=300&fit=crop"
      },
      {
        id: "propeller",
        name: "Propellers",
        description: "High-efficiency 5x4.5 tri-blade propellers. Two CW and two CCW for balanced torque.",
        material: "Glass-Filled Nylon",
        quantity: 4,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop"
      },
      {
        id: "battery-tray",
        name: "Battery Tray & Strap",
        description: "Quick-release battery mounting tray with non-slip pad. Includes rubberized hold-down strap.",
        material: "3D Printed TPU, Carbon Fiber",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop"
      },
      {
        id: "fc-stack",
        name: "Flight Controller Stack",
        description: "Vibration-isolated mounting for flight controller and ESC stack. Uses soft-mount grommets.",
        material: "Aluminum, Silicone",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
      },
      {
        id: "camera-mount",
        name: "FPV Camera Mount",
        description: "Adjustable tilt camera mount for FPV camera. Range from 0 to 60 degrees.",
        material: "3D Printed TPU",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=300&fit=crop"
      },
      {
        id: "landing-gear",
        name: "Landing Gear",
        description: "Lightweight clip-on landing gear legs. Provides ground clearance for camera gimbal.",
        material: "Carbon Fiber Tube",
        quantity: 4,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop"
      }
    ],
    assemblySteps: [
      {
        step: 1,
        title: "Center Plate Assembly",
        description: "Stack the center plates with aluminum standoffs. Install threaded inserts for arm mounting.",
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop"
      },
      {
        step: 2,
        title: "Motor Arm Installation",
        description: "Attach motor arms to the center plate. Ensure proper orientation for X-configuration.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
      },
      {
        step: 3,
        title: "Motor Mounting",
        description: "Mount brushless motors to arm ends. Route motor wires through internal channels to center.",
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&h=400&fit=crop"
      },
      {
        step: 4,
        title: "Electronics Stack",
        description: "Install flight controller and ESC on vibration-damped mounts. Connect all motor wires.",
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop"
      },
      {
        step: 5,
        title: "Camera & Accessories",
        description: "Mount FPV camera and receiver antenna. Install battery tray and landing gear.",
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop"
      },
      {
        step: 6,
        title: "Propellers & Testing",
        description: "Install propellers with correct rotation direction. Perform motor spin test and calibration.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
      }
    ],
    models3D: [
      {
        name: "Complete Drone Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP / IGES",
        previewImage: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop",
        polyCount: "1.1M polygons"
      },
      {
        name: "Frame Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP",
        previewImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        polyCount: "320K polygons"
      },
      {
        name: "Motor Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP",
        previewImage: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&h=400&fit=crop",
        polyCount: "180K polygons"
      }
    ]
  },
  {
    id: "c-clamp-design",
    title: "C-Clamp Design",
    description: "Heavy-duty C-clamp with adjustable jaw and threaded rod mechanism including stress analysis.",
    longDescription: "A fundamental mechanical design project focusing on the structural integrity of a heavy-duty industrial C-clamp. The project involved modeling a high-strength cast frame and a precision-threaded screw assembly. Finite Element Analysis (FEA) was the core focus, identifying stress concentrations in the frame under maximum clamping force. The design was iteratively refined to increase the safety factor while minimizing material usage, demonstrating a classic engineering optimization workflow.",
    category: "Tool Design",
    tools: ["SolidWorks", "ANSYS FEA"],
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&h=600&fit=crop",
    features: [
      "I-beam frame cross-section for high stiffness",
      "ACME thread profile for high axial force",
      "Swiveling jaw pad for uneven surfaces",
      "Ergonomic T-handle for maximum leverage",
      "Hardened steel screw and jaw surfaces"
    ],
    specifications: {
      "Clamping Force": "10,000 N (Rated)",
      "Opening Size": "150 mm",
      "Safety Factor": "2.5 (at Max Load)",
      "Material": "Ductile Cast Iron"
    },
    parts: [
      {
        id: "c-frame",
        name: "C-Frame Body",
        description: "Cast ductile iron frame with I-beam cross-section for maximum stiffness. Features machined jaw face.",
        material: "Ductile Cast Iron (65-45-12)",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&h=300&fit=crop"
      },
      {
        id: "screw",
        name: "Clamping Screw",
        description: "ACME-threaded clamping screw with hardened surface. Features ball end for swivel pad retention.",
        material: "4140 Alloy Steel (Heat Treated)",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
      },
      {
        id: "swivel-pad",
        name: "Swivel Pad",
        description: "Hardened swivel pad that conforms to angled surfaces. Ball-and-socket attachment to screw.",
        material: "Case-Hardened Steel",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=300&fit=crop"
      },
      {
        id: "t-handle",
        name: "T-Handle",
        description: "Sliding T-handle for screw actuation. Provides leverage for high clamping force.",
        material: "Steel Rod",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop"
      },
      {
        id: "threaded-nut",
        name: "Threaded Nut Insert",
        description: "Replaceable bronze nut insert with ACME internal threads. Press-fit into frame.",
        material: "Bearing Bronze",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&h=300&fit=crop"
      },
      {
        id: "fixed-pad",
        name: "Fixed Jaw Pad",
        description: "Hardened and ground fixed jaw surface. Provides flat reference surface for clamping.",
        material: "Tool Steel (Hardened)",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
      }
    ],
    assemblySteps: [
      {
        step: 1,
        title: "Frame Inspection",
        description: "Inspect cast frame for defects. Machine threaded bore and jaw face to specification.",
        image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&h=400&fit=crop"
      },
      {
        step: 2,
        title: "Nut Insert Installation",
        description: "Press-fit the bronze threaded nut into the frame bore. Verify thread alignment.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
      },
      {
        step: 3,
        title: "Screw Assembly",
        description: "Thread the clamping screw through the nut. Install the T-handle through the screw head.",
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&h=400&fit=crop"
      },
      {
        step: 4,
        title: "Swivel Pad Installation",
        description: "Attach the swivel pad to the ball end of the screw. Verify free rotation.",
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop"
      },
      {
        step: 5,
        title: "Fixed Pad Installation",
        description: "Install the hardened fixed jaw pad to the frame. Secure with countersunk screws.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
      },
      {
        step: 6,
        title: "Testing & Validation",
        description: "Perform load test to rated capacity. Run FEA simulation and compare with physical test results.",
        image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&h=400&fit=crop"
      }
    ],
    models3D: [
      {
        name: "Complete C-Clamp Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP / IGES",
        previewImage: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&h=400&fit=crop",
        polyCount: "420K polygons"
      },
      {
        name: "C-Frame (with FEA Results)",
        type: "part",
        fileFormat: "SLDPRT / STEP",
        previewImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        polyCount: "180K polygons"
      },
      {
        name: "Screw Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP",
        previewImage: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&h=400&fit=crop",
        polyCount: "95K polygons"
      }
    ]
  },
  {
    id: "v6-engine-design",
    title: "V6 Engine Design",
    description: "A V6 engine design providing a good balance of power, smooth performance, and fuel efficiency.",
    longDescription: "A comprehensive V6 engine modeling project. The 60-degree V configuration was chosen for its compact dimensions and inherent balance. This project includes detailed modeling of the engine block, heads, valvetrain, and rotating assembly. Focus was placed on the intake manifold design for optimized airflow and the cooling system passages for efficient heat management. The assembly showcases the intricate coordination of timing chains, camshafts, and valves in a modern internal combustion engine.",
    category: "Engine Design",
    tools: ["SolidWorks", "ANSYS FEA", "Flow Simulation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/1/10/IC_engine.JPG?w=800&h=600&fit=crop",
    features: [
      "60-degree V-block with integrated coolant jackets",
      "Dual Overhead Cam (DOHC) valvetrain assembly",
      "Variable Valve Timing (VVT) actuator modeling",
      "High-flow intake and exhaust port geometry",
      "Detailed oil pan and lubrication system"
    ],
    specifications: {
      "Configuration": "60° V6",
      "Displacement": "3.5L",
      "Valvetrain": "24-Valve DOHC",
      "Materials": "Aluminum Alloy Block & Heads"
    },
    parts: [
      {
        id: "v6-block",
        name: "Engine Block",
        description: "60-degree V6 aluminum block with cast iron cylinder liners. Features deep skirt design and cross-bolted main caps.",
        material: "A356 Aluminum Alloy",
        quantity: 1,
        image: "https://upload.wikimedia.org/wikipedia/commons/1/10/IC_engine.JPG?w=400&h=300&fit=crop"
      },
      {
        id: "cylinder-head",
        name: "Cylinder Heads",
        description: "Aluminum DOHC cylinder heads with pentroof combustion chambers. Four valves per cylinder with dual spark plug bosses.",
        material: "A356-T6 Aluminum",
        quantity: 2,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
      },
      {
        id: "v6-crankshaft",
        name: "Crankshaft",
        description: "Forged steel crankshaft with 60-degree crank pin offsets. Split-pin design for even firing order.",
        material: "4340 Forged Steel",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=300&fit=crop"
      },
      {
        id: "v6-pistons",
        name: "Pistons & Rods",
        description: "Hypereutectic aluminum pistons with forged steel connecting rods. Includes floating wrist pins.",
        material: "Aluminum, 4340 Steel",
        quantity: 6,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop"
      },
      {
        id: "camshaft",
        name: "Camshafts",
        description: "Hollow steel camshafts with hardened lobes. Includes VVT phaser on intake cams.",
        material: "Chilled Cast Iron",
        quantity: 4,
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop"
      },
      {
        id: "intake-manifold",
        name: "Intake Manifold",
        description: "Variable-length intake manifold with tuned runners. Includes integrated throttle body mount.",
        material: "Glass-Filled Nylon",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
      },
      {
        id: "timing-system",
        name: "Timing Chain System",
        description: "Dual-chain timing system with hydraulic tensioners. Drives camshafts and oil pump.",
        material: "Hardened Steel",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=300&fit=crop"
      },
      {
        id: "oil-pan",
        name: "Oil Pan & Pump",
        description: "Structural aluminum oil pan with windage tray. Includes gerotor oil pump driven by crankshaft.",
        material: "Aluminum Alloy",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop"
      }
    ],
    assemblySteps: [
      {
        step: 1,
        title: "Short Block Assembly",
        description: "Install main bearings and crankshaft. Assemble pistons to rods and install into block. Torque main and rod caps.",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/10/IC_engine.JPG?w=600&h=400&fit=crop"
      },
      {
        step: 2,
        title: "Timing System Installation",
        description: "Install timing chain guides and tensioners. Mount timing chains to crankshaft and camshaft sprockets.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
      },
      {
        step: 3,
        title: "Cylinder Head Installation",
        description: "Install head gaskets and lower heads onto block. Torque head bolts in proper sequence.",
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&h=400&fit=crop"
      },
      {
        step: 4,
        title: "Valvetrain Assembly",
        description: "Install camshafts with VVT phasers. Mount cam caps and set valve lash. Install valve covers.",
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop"
      },
      {
        step: 5,
        title: "Intake & Exhaust Systems",
        description: "Install intake manifold and throttle body. Mount exhaust manifolds with gaskets.",
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop"
      },
      {
        step: 6,
        title: "Accessories & Testing",
        description: "Install oil pan, water pump, and accessories. Perform leak-down test and flow simulation verification.",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/10/IC_engine.JPG?w=600&h=400&fit=crop"
      }
    ],
    models3D: [
      {
        name: "Complete V6 Engine Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP / IGES",
        previewImage: "https://upload.wikimedia.org/wikipedia/commons/1/10/IC_engine.JPG?w=600&h=400&fit=crop",
        polyCount: "4.2M polygons"
      },
      {
        name: "Short Block Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP",
        previewImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        polyCount: "1.8M polygons"
      },
      {
        name: "Cylinder Head Assembly",
        type: "assembly",
        fileFormat: "SLDASM / STEP",
        previewImage: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&h=400&fit=crop",
        polyCount: "920K polygons"
      },
      {
        name: "Intake Manifold",
        type: "part",
        fileFormat: "SLDPRT / STEP",
        previewImage: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop",
        polyCount: "380K polygons"
    }
  ]
  },
  {
    id: "shell-nozzle-failure-analysis",
    title: "Failure Analysis of Shell Nozzles",
    description: "ASME Sec VIII Div 2 Part 5 compliant stress analysis of shell-nozzle junction using ANSYS — covering elastic, limit load, and elastic-plastic methods.",
    longDescription: "This project presents a comprehensive failure analysis of a cylindrical pressure vessel shell-nozzle junction per ASME Section VIII Division 2, Part 5. The analysis covers protection against plastic collapse, ratcheting, and local failure using three distinct methodologies: Elastic Analysis with linearized stress evaluation, Limit Load Analysis (load factor 1.5), and Elastic-Plastic Analysis (load factors 2.4 and 1.7). The study evaluates Von Mises stress distributions, total deformation, and linearized stress at five critical paths — comparing all results against ASME allowable limits. Material SA516 Gr60 was used at a design temperature of 150°C with an internal pressure of 2 MPa and combined nozzle loading.",
    category: "FEA / Pressure Vessel",
    tools: ["ANSYS Mechanical", "ASME BPVC", "SolidWorks"],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    features: [
      "ASME Sec VIII Div 2, Part 5 compliance verification",
      "Elastic Analysis with linearized stress at 5 critical paths",
      "Limit Load Analysis with 1.5x factored loading",
      "Elastic-Plastic Analysis for plastic collapse (2.4x) and local failure (1.7x)",
      "Protection against Plastic Collapse, Ratcheting & Local Failure",
      "Structured sweep mesh with 157,370 nodes and 32,548 elements",
      "Cylinder & Cartesian coordinate systems for boundary conditions",
      "Complete stress linearization and allowable comparison tables"
    ],
    specifications: {
      "Design Code": "ASME Sec VIII Div 2, Part 5",
      "Material": "SA516 Gr60",
      "Design Temp.": "150 °C",
      "Internal Pressure": "2 MPa",
      "Shell (ID × THK × L)": "1000 × 20 × 1000 mm",
      "Nozzle (ID × THK × L)": "250 × 15 × 150 mm",
      "Nodes / Elements": "157,370 / 32,548",
      "Mesh Method": "Sweep Method"
    },
    parts: [
      {
        id: "shell-body",
        name: "Cylindrical Shell",
        description: "Main pressure vessel shell — ID 1000 mm, thickness 20 mm, length 1000 mm. Carries internal pressure of 2 MPa and supports the nozzle junction.",
        material: "SA516 Gr60",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop"
      },
      {
        id: "nozzle",
        name: "Nozzle",
        description: "Branch nozzle penetrating the shell — ID 250 mm, thickness 15 mm, protrusion length 150 mm. Subjected to combined forces and moments (FL=1000N, FP=1200N, FC=1000N, MC=1e4 N·mm, MT=2e4 N·mm, ML=1e4 N·mm).",
        material: "SA516 Gr60",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
      },
      {
        id: "shell-nozzle-junction",
        name: "Shell-Nozzle Junction (Weld Zone)",
        description: "Critical intersection zone where the nozzle meets the shell. This is the highest stress region, evaluated via 5 linearization paths per ASME requirements.",
        material: "SA516 Gr60 (Welded)",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=300&fit=crop"
      },
      {
        id: "mesh-region",
        name: "Sweep Mesh (FE Model)",
        description: "Structured sweep mesh generated for accurate stress and buckling analysis. Shell body sizing: 20 mm, Nozzle body sizing: 15 mm, 4 divisions through thickness. Total: 157,370 nodes, 32,548 elements.",
        material: "N/A (Finite Element Model)",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop"
      },
      {
        id: "path-1",
        name: "Path 1 — Shell at Junction",
        description: "Linearization path in the shell at the junction with the nozzle. Elastic results: PL = 131.58 MPa (vs SPL 195 MPa), PL+Pb+Q = 169.99 MPa (vs SPS 415 MPa), S1+S2+S3 = 232.75 (vs 4S=520 MPa). All checks PASS.",
        material: "SA516 Gr60",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop"
      },
      {
        id: "path-2",
        name: "Path 2 — Nozzle at Junction",
        description: "Linearization path in the nozzle at the junction with the shell. Elastic results: PL = 123.37 MPa, PL+Pb+Q = 150.02 MPa, S1+S2+S3 = 214.08. All within ASME allowable limits.",
        material: "SA516 Gr60",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
      },
      {
        id: "path-3",
        name: "Path 3 — Max Stress Location",
        description: "Linearization path at the maximum stress location. PL = 154.7 MPa, PL+Pb+Q = 214.8 MPa, S1+S2+S3 = 193.924. Highest local membrane stress but still within ASME limits.",
        material: "SA516 Gr60",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=300&fit=crop"
      },
      {
        id: "path-4-5",
        name: "Path 4 & 5 — Away from Junction",
        description: "Path 4 (away in shell): Pm = 43.36 MPa vs S=130 MPa. Path 5 (away in nozzle): Pm = 8.6245 MPa vs S=130 MPa. Both locations show minimal stress, confirming stress concentration is localized at the junction.",
        material: "SA516 Gr60",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop"
      }
    ],
    assemblySteps: [
      {
        step: 1,
        title: "Geometry & Material Setup",
        description: "Create the shell (ID 1000 × THK 20 × L 1000 mm) and nozzle (ID 250 × THK 15 × L 150 mm) geometry. Assign SA516 Gr60 material properties: Sy = 195 MPa, UTS = 414 MPa, Allowable S = 130 MPa at 150°C. Design code: ASME Sec VIII Div 2.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop"
      },
      {
        step: 2,
        title: "Coordinate Systems & Remote Points",
        description: "Define Cylinder Coordinate System for shell boundary conditions and Cartesian Coordinate System for nozzle loading. Set up Remote Point at nozzle face origin (X=0, Y=0, Z=0) for applying force and moment loads.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
      },
      {
        step: 3,
        title: "Meshing",
        description: "Apply Sweep Method with shell body sizing = 20 mm, nozzle body sizing = 15 mm, and 4 divisions through thickness. Result: 157,370 nodes and 32,548 elements. Structured mesh ensures accurate stress capture at the shell-nozzle junction.",
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&h=400&fit=crop"
      },
      {
        step: 4,
        title: "Boundary Conditions — Elastic Analysis",
        description: "Apply displacement BCs in Cylinder Coordinate System (X=Free, Y=0, Z=0). Apply internal pressure = 2 MPa. Apply remote forces at Cartesian origin: FL=1000N, FP=1200N, FC=1000N, MC=1e4, MT=2e4, ML=1e4 N·mm.",
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop"
      },
      {
        step: 5,
        title: "Boundary Conditions — Limit Load & Elastic-Plastic",
        description: "Limit Load: Factor all loads by 1.5 (P = 3 MPa). Plastic Collapse E-P: Factor by 2.4. Local Failure E-P: Factor by 1.7. All use same displacement BCs. Nonlinear material model with true stress-strain curve for E-P analyses.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop"
      },
      {
        step: 6,
        title: "Solution & Post-Processing",
        description: "Extract Von Mises stress, total deformation, and linearized equivalent stress at 5 paths. For Limit Load: check convergence (force & displacement). For E-P Plastic Collapse: verify convergence. For Local Failure: extract principal stresses, compute triaxial strain limit (εL = 0.3896), verify εPEQ (0.0020) < εL. All checks PASS.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
      }
    ],
    models3D: [
      {
        name: "Complete Shell-Nozzle FEA Model",
        type: "assembly",
        fileFormat: "ANSYS APDL / Workbench (.wbpj)",
        previewImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
        polyCount: "157K nodes / 32K elements"
      },
      {
        name: "Shell-Nozzle CAD Geometry",
        type: "assembly",
        fileFormat: "SLDASM / STEP / IGES",
        previewImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        polyCount: "85K polygons"
      },
      {
        name: "Stress Contour Results Package",
        type: "part",
        fileFormat: "PNG / PDF Report",
        previewImage: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&h=400&fit=crop",
        polyCount: "30+ result images"
      }
    ]
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}
