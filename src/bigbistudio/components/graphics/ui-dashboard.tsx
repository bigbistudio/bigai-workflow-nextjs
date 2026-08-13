"use client"

import Image from "next/image"
import { Logo } from "@/bigbistudio/components/logo"
import {
  Atom,
  Telescope,
  PencilRuler,
  BookOpenText,
  Hammer,
  LandPlot,
  SquareTerminal,
  ScrollText,
  Activity,
  Zap,
  Workflow,
  DatabaseSearch,
  Play,
  Pause,
  Infinity,
  Brain,
  Bot,
  Plus,
  FolderPlus,
  CloudUpload,
  History,
  Astroid,
  X,
  ChevronDown,
  Layers,
  ListFilter,
  Maximize2,
  Settings,
  Copy,
  Trash,
  Command,
  LogOut,
  Shuffle,
  HatGlasses,
  CirclePlus,
  MousePointer,
  Hand,
  Grid2X2Plus,
  EllipsisVerticalIcon,
} from "lucide-react"

export function UIDashboard() {
  return (
    <div
      aria-hidden="true"
      className="flex flex-col md:w-full min-w-244 h-150 bg-surface-secondary border border-line-translucent rounded-xl overflow-hidden scale-70 skew-y-[-10deg] origin-[0%_70%_0px] lg:scale-100 lg:skew-0 lg:translate-0"
    >
      {/* App Header */}
      <div className="flex justify-between px-4 py-2 border-b border-line-translucent">
        <div className="flex gap-2 py-1.5">
          <Logo width={50} height={18} />
          <div className="flex items-center gap-1">
            <Atom size={12} strokeWidth={1.5} className="text-accent" />
            <span className="text-ink-tertiary text-[11px] leading-4">
              Question Classifier + Knowledge + Chatbot Workspace
            </span>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex gap-1 cursor-default">
            <div className="flex items-center gap-1.5 p-2">
              <Telescope
                size={12}
                strokeWidth={1.5}
                className="text-ink-tertiary"
              />
              <span className="text-ink-tertiary text-[11px] leading-2.75 font-medium">
                Explore
              </span>
            </div>
            <div className="flex items-center gap-1.5 p-2 bg-surface-quaternary rounded-md">
              <PencilRuler
                size={12}
                strokeWidth={1.5}
                className="text-ink-tertiary"
              />
              <span className="text-ink-tertiary text-[11px] leading-2.75 font-medium">
                Studio
              </span>
            </div>
            <div className="flex items-center gap-1.5 p-2">
              <BookOpenText
                size={12}
                strokeWidth={1.5}
                className="text-ink-tertiary"
              />
              <span className="text-ink-tertiary text-[11px] leading-2.75 font-medium">
                Docs
              </span>
            </div>
            <div className="flex items-center gap-1.5 p-2">
              <Hammer
                size={12}
                strokeWidth={1.5}
                className="text-ink-tertiary"
              />
              <span className="text-ink-tertiary text-[11px] leading-2.75 font-medium">
                Tools
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 cursor-default group">
            <span className="text-ink-tertiary text-[11px] leading-4">
              Marcus Chen
            </span>
            <Image
              src="/avatars/marcus-chen.png"
              width={16}
              height={16}
              alt="User"
              className="rounded-full grayscale-100 group-hover:grayscale-0 transition-all ease-in-out duration-300"
            />
          </div>
        </div>
      </div>

      {/* App Body */}
      <div className="flex items-center flex-1">
        <div className="flex flex-col gap-2 w-1/4 h-full min-w-20 max-w-45 p-4">
          <div className="flex flex-col gap-1 w-full">
            <span className="text-ink-quaternary text-[11px] leading-2.75 font-medium px-1 pt-0 pb-2">
              General
            </span>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5 p-2 bg-surface-quaternary rounded-md">
                <LandPlot
                  size={12}
                  strokeWidth={1.5}
                  className="text-ink-primary"
                />
                <span className="text-ink-primary text-[11px] leading-2.75 font-medium">
                  Orchestrate
                </span>
              </div>
              <div className="flex items-center gap-1.5 p-2">
                <SquareTerminal
                  size={12}
                  strokeWidth={1.5}
                  className="text-ink-tertiary"
                />
                <span className="text-ink-tertiary text-[11px] leading-2.75 font-medium">
                  API Access
                </span>
              </div>
              <div className="flex items-center gap-1.5 p-2">
                <ScrollText
                  size={12}
                  strokeWidth={1.5}
                  className="text-ink-tertiary"
                />
                <span className="text-ink-tertiary text-[11px] leading-2.75 font-medium">
                  Logs & Annotations
                </span>
              </div>
              <div className="flex items-center gap-1.5 p-2">
                <Activity
                  size={12}
                  strokeWidth={1.5}
                  className="text-ink-tertiary"
                />
                <span className="text-ink-tertiary text-[11px] leading-2.75 font-medium">
                  Monitoring
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <span className="text-ink-quaternary text-[11px] leading-2.75 font-medium px-1 py-2">
              Nodes
            </span>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 p-2">
                <div className="p-0.5 rounded-sm bg-red-700 opacity-80">
                  <Zap size={12} strokeWidth={2} className="text-ink-primary" />
                </div>
                <span className="text-ink-secondary text-[11px] leading-2.75 font-medium">
                  Trigger
                </span>
              </div>
              <div className="flex items-center gap-1.5 p-2">
                <div className="p-0.5 rounded-sm bg-orange-500 opacity-80">
                  <Workflow
                    size={12}
                    strokeWidth={2}
                    className="text-ink-primary"
                  />
                </div>
                <span className="text-ink-secondary text-[11px] leading-2.75 font-medium">
                  Condition
                </span>
              </div>
              <div className="flex items-center gap-1.5 p-2">
                <div className="p-0.5 rounded-sm bg-green-700 opacity-80">
                  <DatabaseSearch
                    size={12}
                    strokeWidth={2}
                    className="text-ink-primary"
                  />
                </div>
                <span className="text-ink-secondary text-[11px] leading-2.75 font-medium">
                  Query
                </span>
              </div>
              <div className="flex items-center gap-1.5 p-2">
                <div className="p-0.5 rounded-sm bg-blue-700 opacity-80">
                  <Play
                    size={12}
                    strokeWidth={2}
                    className="text-ink-primary"
                  />
                </div>
                <span className="text-ink-secondary text-[11px] leading-2.75 font-medium">
                  Action
                </span>
              </div>
              <div className="flex items-center gap-1.5 p-2">
                <div className="p-0.5 rounded-sm bg-purple-700 opacity-80">
                  <Pause
                    size={12}
                    strokeWidth={2}
                    className="text-ink-primary"
                  />
                </div>
                <span className="text-ink-secondary text-[11px] leading-2.75 font-medium">
                  Delay
                </span>
              </div>
              <div className="flex items-center gap-1.5 p-2">
                <div className="p-0.5 rounded-sm bg-teal-600 opacity-80">
                  <Infinity
                    size={12}
                    strokeWidth={2}
                    className="text-ink-primary"
                  />
                </div>
                <span className="text-ink-secondary text-[11px] leading-2.75 font-medium">
                  Loop
                </span>
              </div>
              <div className="flex items-center gap-1.5 p-2">
                <div className="p-0.5 rounded-sm bg-sky-600 opacity-80">
                  <Brain
                    size={12}
                    strokeWidth={2}
                    className="text-ink-primary"
                  />
                </div>
                <span className="text-ink-secondary text-[11px] leading-2.75 font-medium">
                  LLM
                </span>
              </div>
              <div className="flex items-center gap-1.5 p-2">
                <div className="p-0.5 rounded-sm bg-indigo-600 opacity-80">
                  <Bot size={12} strokeWidth={2} className="text-ink-primary" />
                </div>
                <span className="text-ink-secondary text-[11px] leading-2.75 font-medium">
                  Agent
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-1.5 p-1.5 mt-auto border border-line-translucent rounded-sm opacity-60">
            <Plus size={12} strokeWidth={2} className="text-ink-tertiary" />
            <span className="text-ink-tertiary text-[10px] leading-2.5 font-medium">
              Custom Node
            </span>
          </div>
        </div>
        <div
          className="flex flex-col gap-4 flex-1 w-3/4 h-full bg-surface-quaternary/60 px-4 pt-2 pb-4"
          style={{
            backgroundImage:
              "radial-gradient(rgb(40 40 40) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        >
          <div className="flex items-center justify-between w-full h-fit">
            <span className="text-ink-tertiary text-[8px] leading-4">
              Auto Saved - Unpublished
            </span>
            <div className="flex px-1.5 py-0.5 bg-surface-quaternary/80 rounded h-fit">
              <span className="text-ink-tertiary text-[8px] leading-4">
                Scroll to select node
              </span>
            </div>
            <div className="flex gap-2 cursor-default">
              <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-sm bg-surface-quaternary border border-line-translucent">
                <Play size={10} strokeWidth={2} className="text-ink-primary" />
                <span className="text-ink-primary text-[8px] leading-2 font-medium">
                  Preview
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-sm bg-surface-quaternary border border-line-translucent">
                <FolderPlus
                  size={10}
                  strokeWidth={2}
                  className="text-ink-primary"
                />
                <span className="text-ink-primary text-[8px] leading-2 font-medium">
                  Features
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-sm bg-blue-700">
                <CloudUpload
                  size={10}
                  strokeWidth={2}
                  className="text-ink-primary"
                />
                <span className="text-ink-primary text-[8px] leading-2 font-medium">
                  Publish
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-sm bg-surface-quaternary border border-line-translucent">
                <History
                  size={10}
                  strokeWidth={2}
                  className="text-ink-primary"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-2.5">
            <div className="flex flex-col gap-4 flex-1">
              <div className="flex justify-start items-center overflow-hidden flex-1">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-col gap-1.5 p-2 rounded-md bg-surface-quaternary/80 border border-line-translucent w-25">
                    <div className="flex items-center gap-1.5">
                      <div className="p-0.5 rounded-sm bg-red-700 opacity-80">
                        <Zap
                          size={10}
                          strokeWidth={2}
                          className="text-ink-primary"
                        />
                      </div>
                      <span className="text-ink-secondary text-[9px] leading-2.75 font-bold">
                        Start
                      </span>
                    </div>
                    <p className="text-ink-tertiary font-light text-[6px] leading-2.5">
                      Define the initial parameters for launching a workflow.
                    </p>
                  </div>
                  <span className="w-px h-6 bg-ink-quaternary" />
                  <div className="flex flex-col gap-1.5 p-2 rounded-md bg-surface-quaternary/80 border border-blue-500 w-32">
                    <div className="flex items-center gap-1.5">
                      <div className="p-0.5 rounded-sm bg-orange-500 opacity-80">
                        <Workflow
                          size={10}
                          strokeWidth={2}
                          className="text-ink-primary"
                        />
                      </div>
                      <span className="text-ink-secondary text-[9px] leading-2.75 font-bold">
                        Question Classifier
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 px-1.5 py-1 bg-surface-quaternary border border-line-translucent rounded-sm">
                      <Astroid
                        size={10}
                        strokeWidth={2}
                        className="text-blue-400"
                      />
                      <span className="text-ink-secondary font-light text-[7px] leading-2">
                        gemini-3.5-pro
                      </span>
                      <span className="text-ink-tertiary font-light text-[7px] leading-2">
                        CHAT
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5 px-1.5 py-1 bg-surface-quaternary border border-line-translucent rounded-sm">
                      <span className="text-ink-tertiary font-medium text-[6px] leading-2">
                        CLASS 1
                      </span>
                      <span className="text-ink-secondary font-medium text-[6px] leading-2.5">
                        Question related to after sales
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5 px-1.5 py-1 bg-surface-quaternary border border-line-translucent rounded-sm">
                      <span className="text-ink-tertiary font-medium text-[6px] leading-2">
                        CLASS 2
                      </span>
                      <span className="text-ink-secondary font-medium text-[6px] leading-2.5">
                        Questions about how to use products
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5 px-1.5 py-1 bg-surface-quaternary border border-line-translucent rounded-sm">
                      <span className="text-ink-tertiary font-medium text-[6px] leading-2">
                        CLASS 3
                      </span>
                      <span className="text-ink-secondary font-medium text-[6px] leading-2.5">
                        Other questions
                      </span>
                    </div>
                    <p className="text-ink-tertiary font-light text-[6px] leading-2.5">
                      Define the classification conditions of user questions,
                      LLM can define how the conversation progresses based on
                      the classification description.
                    </p>
                  </div>
                  <span className="w-px h-6 bg-ink-quaternary" />
                  <div className="flex flex-col gap-1.5 p-2 rounded-md bg-surface-quaternary/80 border border-line-translucent w-28">
                    <div className="flex items-center gap-1.5">
                      <div className="p-0.5 rounded-sm bg-blue-700 opacity-80">
                        <Play
                          size={10}
                          strokeWidth={2}
                          className="text-ink-primary"
                        />
                      </div>
                      <span className="text-ink-secondary text-[9px] leading-2.75 font-bold">
                        Answer 01
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5 px-1.5 py-1 bg-surface-quaternary border border-line-translucent rounded-sm">
                      <span className="text-ink-tertiary font-medium text-[6px] leading-2">
                        ANSWER
                      </span>
                      <span className="text-ink-secondary font-medium text-[6px] leading-2.5">
                        Sorry, I can not help you with these questions.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-18">
                  <span className="w-4 h-px bg-ink-quaternary" />
                  <span className="w-4 h-px bg-ink-quaternary" />
                </div>
                <div className="flex flex-col items-center justify-center gap-6">
                  <div className="flex flex-col gap-1.5 p-2 rounded-md bg-surface-quaternary/80 border border-line-translucent w-34">
                    <div className="flex items-center gap-1.5">
                      <div className="p-0.5 rounded-sm bg-green-700 opacity-80">
                        <DatabaseSearch
                          size={10}
                          strokeWidth={2}
                          className="text-ink-primary"
                        />
                      </div>
                      <span className="text-ink-secondary text-[9px] leading-2.75 font-bold">
                        Knowledge Retrieval
                      </span>
                    </div>
                    <p className="text-ink-tertiary font-light text-[6px] leading-2.5">
                      Retrieve knowledge on after sales SOP.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5 p-2 rounded-md bg-surface-quaternary/80 border border-line-translucent w-34">
                    <div className="flex items-center gap-1.5">
                      <div className="p-0.5 rounded-sm bg-green-700 opacity-80">
                        <DatabaseSearch
                          size={10}
                          strokeWidth={2}
                          className="text-ink-primary"
                        />
                      </div>
                      <span className="text-ink-secondary text-[9px] leading-2.75 font-bold">
                        Knowledge Retrieval
                      </span>
                    </div>
                    <p className="text-ink-tertiary font-light text-[6px] leading-2.5">
                      Retrieval knowledge about out products.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-18">
                  <span className="w-4 h-px bg-ink-quaternary" />
                  <span className="w-4 h-px bg-ink-quaternary" />
                </div>
                <div className="flex flex-col items-center justify-center gap-6">
                  <div className="flex flex-col gap-1.5 p-2 rounded-md bg-surface-quaternary/80 border border-line-translucent w-32">
                    <div className="flex items-center gap-1.5">
                      <div className="p-0.5 rounded-sm bg-sky-600 opacity-80">
                        <Brain
                          size={10}
                          strokeWidth={2}
                          className="text-ink-primary"
                        />
                      </div>
                      <span className="text-ink-secondary text-[9px] leading-2.75 font-bold">
                        LLM
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 px-1.5 py-1 bg-surface-quaternary border border-line-translucent rounded-sm">
                      <Astroid
                        size={10}
                        strokeWidth={2}
                        className="text-blue-400"
                      />
                      <span className="text-ink-secondary font-light text-[7px] leading-2">
                        gemini-3.5-pro
                      </span>
                      <span className="text-ink-tertiary font-light text-[7px] leading-2">
                        CHAT
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 p-2 rounded-md bg-surface-quaternary/80 border border-line-translucent w-32">
                    <div className="flex items-center gap-1.5">
                      <div className="p-0.5 rounded-sm bg-sky-600 opacity-80">
                        <Brain
                          size={10}
                          strokeWidth={2}
                          className="text-ink-primary"
                        />
                      </div>
                      <span className="text-ink-secondary text-[9px] leading-2.75 font-bold">
                        LLM
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 px-1.5 py-1 bg-surface-quaternary border border-line-translucent rounded-sm">
                      <Astroid
                        size={10}
                        strokeWidth={2}
                        className="text-blue-400"
                      />
                      <span className="text-ink-secondary font-light text-[7px] leading-2">
                        gemini-3.5-pro
                      </span>
                      <span className="text-ink-tertiary font-light text-[7px] leading-2">
                        CHAT
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-18">
                  <span className="w-4 h-px bg-ink-quaternary" />
                  <span className="w-4 h-px bg-ink-quaternary" />
                </div>
                <div className="flex flex-col items-center justify-center gap-6">
                  <div className="flex flex-col gap-1.5 p-2 rounded-md bg-surface-quaternary/80 border border-line-translucent w-25">
                    <div className="flex items-center gap-1.5">
                      <div className="p-0.5 rounded-sm bg-blue-700 opacity-80">
                        <Play
                          size={10}
                          strokeWidth={2}
                          className="text-ink-primary"
                        />
                      </div>
                      <span className="text-ink-secondary text-[9px] leading-2.75 font-bold">
                        Answer 02
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 px-1.5 py-1 bg-surface-quaternary border border-line-translucent rounded-sm">
                      <Brain
                        size={10}
                        strokeWidth={2}
                        className="text-fuchsia-700"
                      />
                      <span className="text-ink-secondary font-light text-[7px] leading-2">
                        LLM (x)Text
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 p-2 rounded-md bg-surface-quaternary/80 border border-line-translucent w-25">
                    <div className="flex items-center gap-1.5">
                      <div className="p-0.5 rounded-sm bg-blue-700 opacity-80">
                        <Play
                          size={10}
                          strokeWidth={2}
                          className="text-ink-primary"
                        />
                      </div>
                      <span className="text-ink-secondary text-[9px] leading-2.75 font-bold">
                        Answer 03
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 px-1.5 py-1 bg-surface-quaternary border border-line-translucent rounded-sm">
                      <Brain
                        size={10}
                        strokeWidth={2}
                        className="text-fuchsia-700"
                      />
                      <span className="text-ink-secondary font-light text-[7px] leading-2">
                        LLM (x)Text
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex gap-1.5 px-1.5 py-1 bg-[#232326] border border-line-translucent rounded-md opacity-80">
                  <div className="p-1 rounded-sm">
                    <CirclePlus
                      size={12}
                      strokeWidth={1.5}
                      className="text-ink-secondary"
                    />
                  </div>
                  <div className="p-1 rounded-sm">
                    <MousePointer
                      size={12}
                      strokeWidth={1.5}
                      className="text-ink-secondary transform rotate-15"
                    />
                  </div>
                  <div className="p-1 rounded-sm bg-[#4680C420]">
                    <Hand
                      size={12}
                      strokeWidth={1.5}
                      className="text-blue-500"
                    />
                  </div>
                  <div className="p-1 rounded-sm">
                    <Grid2X2Plus
                      size={12}
                      strokeWidth={1.5}
                      className="text-ink-secondary"
                    />
                  </div>
                  <div className="p-1 rounded-sm">
                    <Maximize2
                      size={12}
                      strokeWidth={1.5}
                      className="text-ink-secondary"
                    />
                  </div>
                  <div className="px-1.5 py-1 rounded bg-[#2E2E2E] inline-flex items-center text-[8px] leading-2">
                    110%
                  </div>
                  <div className="p-1 rounded-sm">
                    <EllipsisVerticalIcon
                      size={12}
                      strokeWidth={1.5}
                      className="text-ink-secondary"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 min-w-58 w-65 bg-surface-secondary/60 border border-line-secondary rounded-md p-2.5">
              <div className="flex items-center gap-1.5 pb-1">
                <div className="p-0.5 rounded-sm bg-orange-500 opacity-80">
                  <Workflow
                    size={12}
                    strokeWidth={2}
                    className="text-ink-primary"
                  />
                </div>
                <span className="text-ink-secondary text-xs leading-3 font-medium">
                  Question Classifier
                </span>
                <X
                  size={12}
                  strokeWidth={2}
                  className="text-ink-tertiary ml-auto"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-ink-secondary font-light text-[6px] leading-2.5">
                  Define the classification conditions of user questions, LLM
                  can define how the conversation progresses based on the
                  classification description.
                </p>
              </div>
              <span className="text-ink-quaternary text-[8px] leading-2.5 font-medium mb-0.5">
                Settings
              </span>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1.5 px-2 py-1 bg-surface-quaternary border border-line-translucent/50 rounded-sm">
                  <Astroid
                    size={12}
                    strokeWidth={1.5}
                    className="text-blue-400"
                  />
                  <span className="text-ink-secondary text-[8px] leading-4">
                    gemini-3.5-pro
                  </span>
                  <ChevronDown
                    size={12}
                    strokeWidth={2}
                    className="text-ink-tertiary ml-auto"
                  />
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 bg-surface-quaternary border border-line-translucent/50 rounded-sm">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <Layers
                        size={12}
                        strokeWidth={1.5}
                        className="text-cyan-500"
                      />
                      <span className="text-ink-secondary text-[8px] leading-4">
                        Input Variables
                      </span>
                    </div>
                    <p className="text-ink-tertiary font-light text-[8px] leading-2.5">
                      sys.query string, sys.conversation_id, sys.user_id
                    </p>
                  </div>

                  <ListFilter
                    size={10}
                    strokeWidth={2}
                    className="text-ink-tertiary ml-auto"
                  />
                </div>
              </div>
              <span className="text-ink-quaternary text-[8px] leading-2.5 font-medium my-0.5">
                Configuration
              </span>
              <div className="flex flex-col gap-2">
                <span className="text-ink-secondary font-medium text-[6px] leading-2">
                  Class *
                </span>
                <div className="flex flex-col gap-1 p-1.5 bg-surface-quaternary border border-line-translucent rounded-sm">
                  <div className="flex justify-between">
                    <span className="text-ink-tertiary font-medium text-[6px] leading-2">
                      CLASS 1
                    </span>
                    <div className="flex gap-1.5">
                      <Settings
                        size={8}
                        strokeWidth={2}
                        className="text-ink-tertiary"
                      />
                      <Copy
                        size={8}
                        strokeWidth={2}
                        className="text-ink-tertiary"
                      />
                      <Trash
                        size={8}
                        strokeWidth={2}
                        className="text-ink-tertiary"
                      />
                      <Maximize2
                        size={8}
                        strokeWidth={2}
                        className="text-ink-tertiary"
                      />
                    </div>
                  </div>
                  <span className="text-ink-secondary font-medium text-[8px] leading-2.5">
                    Question related to after sales
                  </span>
                </div>
                <div className="flex flex-col gap-1 p-1.5 bg-surface-quaternary border border-line-translucent rounded-sm">
                  <div className="flex justify-between">
                    <span className="text-ink-tertiary font-medium text-[6px] leading-2">
                      CLASS 2
                    </span>
                    <div className="flex gap-1.5">
                      <Settings
                        size={8}
                        strokeWidth={2}
                        className="text-ink-tertiary"
                      />
                      <Copy
                        size={8}
                        strokeWidth={2}
                        className="text-ink-tertiary"
                      />
                      <Trash
                        size={8}
                        strokeWidth={2}
                        className="text-ink-tertiary"
                      />
                      <Maximize2
                        size={8}
                        strokeWidth={2}
                        className="text-ink-tertiary"
                      />
                    </div>
                  </div>
                  <span className="text-ink-secondary font-medium text-[8px] leading-2.5">
                    Questions about how to use products
                  </span>
                </div>
                <div className="flex flex-col gap-1 p-1.5 bg-surface-quaternary border border-line-translucent rounded-sm">
                  <div className="flex justify-between">
                    <span className="text-ink-tertiary font-medium text-[6px] leading-2">
                      CLASS 3
                    </span>
                    <div className="flex gap-1.5">
                      <Settings
                        size={8}
                        strokeWidth={2}
                        className="text-ink-tertiary"
                      />
                      <Copy
                        size={8}
                        strokeWidth={2}
                        className="text-ink-tertiary"
                      />
                      <Trash
                        size={8}
                        strokeWidth={2}
                        className="text-ink-tertiary"
                      />
                      <Maximize2
                        size={8}
                        strokeWidth={2}
                        className="text-ink-tertiary"
                      />
                    </div>
                  </div>
                  <span className="text-ink-secondary font-medium text-[8px] leading-2.5">
                    Other questions
                  </span>
                </div>
                <div className="flex flex-col gap-1 px-1.5 py-1 bg-surface-quaternary border border-line-translucent rounded-sm">
                  <div className="flex justify-center gap-1">
                    <span className="text-ink-tertiary font-medium text-[6px] leading-2">
                      Add Class
                    </span>
                    <Plus
                      size={8}
                      strokeWidth={2}
                      className="text-ink-tertiary"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-1">
                <div className="flex items-center gap-1.5 py-1.5 border-y border-line-translucent">
                  <Command
                    size={10}
                    strokeWidth={1.5}
                    className="text-ink-secondary"
                  />
                  <span className="text-ink-secondary text-[8px] leading-4">
                    Advanced Setting
                  </span>
                  <ChevronDown
                    size={12}
                    strokeWidth={2}
                    className="text-ink-tertiary ml-auto"
                  />
                </div>
                <div className="flex items-center gap-1.5 py-1.5 border-b border-line-translucent">
                  <LogOut
                    size={10}
                    strokeWidth={1.5}
                    className="text-ink-secondary"
                  />
                  <span className="text-ink-secondary text-[8px] leading-4">
                    Output Variables
                  </span>
                  <ChevronDown
                    size={12}
                    strokeWidth={2}
                    className="text-ink-tertiary ml-auto"
                  />
                </div>
                <div className="flex items-center gap-1.5 py-1.5">
                  <Shuffle
                    size={10}
                    strokeWidth={1.5}
                    className="text-ink-secondary"
                  />
                  <span className="text-ink-secondary text-[8px] leading-4">
                    Next Step
                  </span>
                  <ChevronDown
                    size={12}
                    strokeWidth={2}
                    className="text-ink-tertiary ml-auto"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2.5 mt-auto">
                <div className="flex justify-center items-center gap-1.5 px-2 py-1 bg-surface-tertiary border border-line-translucent/20 rounded-sm">
                  <HatGlasses
                    size={10}
                    strokeWidth={1.5}
                    className="text-ink-tertiary"
                  />
                  <span className="text-ink-tertiary font-medium text-[8px] leading-4">
                    Dry Run
                  </span>
                </div>
                <div className="flex justify-center items-center gap-1.5 px-2 py-1 bg-blue-500/20 border border-blue-600/60 rounded-sm">
                  <Play
                    size={10}
                    strokeWidth={1.5}
                    className="text-ink-secondary"
                  />
                  <span className="text-ink-secondary font-medium text-[8px] leading-4">
                    Run
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
