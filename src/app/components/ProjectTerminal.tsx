import React, { useState, useEffect } from 'react';
import { Terminal, Code2, Play, GitBranch, Cpu, Database } from 'lucide-react';

const PROJECTS = [
  {
    id: 'adas',
    name: 'ADAS ROUTER CORE',
    lang: 'C++',
    icon: <Cpu className="w-4 h-4" />,
    status: 'ONLINE',
    description: 'Autonomous driving stack featuring 9-state FSM, LiDAR fusion, and PID control.',
    code: `// FSM BEHAVIOUR PLANNER - STATE: OVERTAKE
void ADASCore::executeOvertake() {
    auto lidar_data = sensor_fusion_->getPointCloud();
    auto obstacles = detector_->findDynamicObstacles(lidar_data);
    
    if (path_clear(obstacles, OVERTAKE_MARGIN)) {
        pid_controller_->setTargetVelocity(MAX_SAFE_SPEED);
        pure_pursuit_->generateOvertakeTrajectory();
        ROS_INFO("Executing overtake maneuver.");
    } else {
        ROS_WARN("Overtake aborted. Obstacle detected.");
        fsm_->transitionTo(State::LANE_FOLLOW);
    }
}`,
    tech: ['C++', 'ROS', 'CARLA', 'LiDAR']
  },
  {
    id: 'vision',
    name: 'NEURAL VISION SYS',
    lang: 'PYTHON',
    icon: <Code2 className="w-4 h-4" />,
    status: 'TRAINING',
    description: 'Real-time object detection pipeline utilizing YOLOv8 and deep neural networks.',
    code: `import torch
from ultralytics import YOLO
import cv2

def run_vision_pipeline(stream_url):
    model = YOLO('yolov8n-custom.pt')
    cap = cv2.VideoCapture(stream_url)
    
    while cap.isOpened():
        success, frame = cap.read()
        if success:
            results = model.predict(frame, conf=0.7)
            annotated_frame = results[0].plot()
            cv2.imshow("Vision Core", annotated_frame)
            
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break`,
    tech: ['Python', 'PyTorch', 'YOLOv8', 'OpenCV']
  },
  {
    id: 'cloud',
    name: 'CLOUD TELEMETRY',
    lang: 'GO',
    icon: <Database className="w-4 h-4" />,
    status: 'SYNCING',
    description: 'High-throughput telemetry ingestion pipeline hosted on Google Cloud infrastructure.',
    code: `package main

import (
    "context"
    "log"
    "cloud.google.com/go/pubsub"
)

func ingestTelemetry(projectID, topicID string) error {
    ctx := context.Background()
    client, err := pubsub.NewClient(ctx, projectID)
    if err != nil {
        return err
    }
    
    topic := client.Topic(topicID)
    res := topic.Publish(ctx, &pubsub.Message{
        Data: []byte("telemetry_payload_0x4A9B"),
    })
    
    id, err := res.Get(ctx)
    log.Printf("Published payload; msg ID: %v", id)
    return err
}`,
    tech: ['Go', 'GCP', 'Pub/Sub', 'Docker']
  }
];

export function ProjectTerminal() {
  const [activeId, setActiveId] = useState(PROJECTS[0].id);
  const activeProject = PROJECTS.find(p => p.id === activeId)!;
  
  const [typedCode, setTypedCode] = useState('');
  
  useEffect(() => {
    setTypedCode('');
    let i = 0;
    const interval = setInterval(() => {
      setTypedCode(activeProject.code.substring(0, i));
      i += 2; // typing speed
      if (i > activeProject.code.length) clearInterval(interval);
    }, 10);
    return () => clearInterval(interval);
  }, [activeId]);

  return (
    <div className="w-full h-[700px] border border-wintry/30 bg-[#050505] shadow-[0_0_30px_rgba(6,182,212,0.1)] flex flex-col overflow-hidden relative group">
      {/* Top Bar */}
      <div className="h-10 bg-wintry/10 border-b border-wintry/30 flex items-center px-4 justify-between">
        <div className="flex gap-2 items-center">
          <Terminal className="w-4 h-4 text-wintry" />
          <span className="font-cyber text-xs text-wintry tracking-widest">root@gundam-os:~#</span>
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-wintry/20" />
          <div className="w-3 h-3 rounded-full bg-wintry/50" />
          <div className="w-3 h-3 rounded-full bg-wintry" />
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-[30%] border-r border-wintry/20 bg-black/50 p-6 flex flex-col gap-4">
          <h3 className="font-cyber text-wintry/50 tracking-widest text-xs mb-4 uppercase">Select Target</h3>
          
          {PROJECTS.map(project => {
            const isActive = project.id === activeId;
            return (
              <button
                key={project.id}
                onClick={() => setActiveId(project.id)}
                className={`flex items-center gap-3 p-4 border transition-all duration-300 text-left ${
                  isActive 
                    ? 'border-wintry bg-wintry/10 shadow-[0_0_15px_rgba(6,182,212,0.2)]' 
                    : 'border-wintry/10 hover:border-wintry/50 hover:bg-wintry/5 text-wintry/50'
                }`}
              >
                <div className={`${isActive ? 'text-wintry animate-pulse' : ''}`}>
                  {project.icon}
                </div>
                <div>
                  <div className={`font-cyber text-sm tracking-widest ${isActive ? 'text-white' : ''}`}>
                    {project.name}
                  </div>
                  <div className="text-[10px] font-mono mt-1 opacity-60 flex gap-2">
                    <span>[{project.lang}]</span>
                    <span className={isActive ? 'text-wintry' : ''}>{project.status}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Execution Area */}
        <div className="flex-1 flex flex-col p-6 gap-6 relative">
          {/* Project Details */}
          <div className="border-b border-wintry/20 pb-6">
            <h2 className="font-cyber text-3xl font-bold text-white tracking-widest mb-2 flex items-center gap-4">
              {activeProject.name}
              <div className="px-2 py-1 bg-wintry/20 border border-wintry text-[10px] text-wintry animate-pulse">
                {activeProject.status}
              </div>
            </h2>
            <p className="text-gray-400 font-light mb-4">{activeProject.description}</p>
            
            <div className="flex gap-2">
              {activeProject.tech.map(t => (
                <span key={t} className="text-xs px-2 py-1 bg-wintry/5 border border-wintry/30 text-wintry">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Split Execution View */}
          <div className="flex-1 flex gap-6 min-h-0">
            {/* Code Output */}
            <div className="flex-1 border border-wintry/20 bg-black p-4 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-2 opacity-50 flex items-center gap-2 text-xs text-wintry font-cyber">
                <GitBranch className="w-3 h-3" /> main
              </div>
              <pre className="font-mono text-[11px] md:text-sm text-green-400 whitespace-pre-wrap leading-relaxed h-full overflow-y-auto custom-scrollbar">
                {typedCode}
                <span className="w-2 h-4 bg-wintry inline-block ml-1 animate-ping" />
              </pre>
            </div>

            {/* Visual Demo Output */}
            <div className="flex-1 border border-wintry/20 bg-black relative flex items-center justify-center overflow-hidden">
              {/* Scanline Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(6,182,212,0.1)_50%)] bg-[size:100%_4px] pointer-events-none z-10" />
              
              {/* Placeholder Content (To be replaced with user's GIF/Video) */}
              <div className="absolute inset-0 bg-wintry/10" />
              <div className="z-20 flex flex-col items-center justify-center opacity-50">
                <Play className="w-16 h-16 text-wintry mb-4" />
                <span className="font-cyber text-wintry tracking-widest text-sm">AWAITING VISUAL FEED</span>
                <span className="text-xs text-gray-500 mt-2">[Insert Demo GIF Here]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
