import {
  Zap,
  Workflow,
  DatabaseSearch,
  Play,
  Pause,
  Infinity,
  Brain,
  Bot,
  FolderPlus,
  History,
  Download,
  Loader,
} from "lucide-react"

export function UIBuilder() {
  return (
    <div
      aria-hidden="true"
      className="flex flex-col gap-4 p-4 bg-surface-secondary border border-line-translucent rounded-xl mobile:h-90 max-w-lg"
    >
      <div className="flex flex-col gap-4 h-full">
        <div className="flex flex-col gap-4 mobile:gap-0 mobile:flex-row justify-between mobile:items-center">
          <span className="text-xs sm:text-sm font-semibold text-ink-secondary">
            Logic Builder
          </span>
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
            <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-sm bg-surface-quaternary border border-line-translucent">
              <History size={10} strokeWidth={2} className="text-ink-primary" />
            </div>
          </div>
        </div>

        <div className="flex items-stretch flex-1">
          <div className="flex flex-col gap-2 w-1/4 min-w-22 h-full">
            <div className="flex flex-col gap-2 w-full">
              <span className="text-ink-quaternary text-[11px] leading-2.75 font-medium">
                Nodes
              </span>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 py-1.5">
                  <div className="p-0.5 rounded-sm bg-red-700 opacity-80">
                    <Zap
                      size={12}
                      strokeWidth={2}
                      className="text-ink-primary"
                    />
                  </div>
                  <span className="text-ink-secondary text-[11px] leading-2.75 font-medium">
                    Trigger
                  </span>
                </div>
                <div className="flex items-center gap-1.5 py-1.5">
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
                <div className="flex items-center gap-1.5 py-1.5">
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
                <div className="flex items-center gap-1.5 py-1.5">
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
                <div className="flex items-center gap-1.5 py-1.5">
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
                <div className="flex items-center gap-1.5 py-1.5">
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
                <div className="flex items-center gap-1.5 py-1.5">
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
                <div className="flex items-center gap-1.5 py-1.5">
                  <div className="p-0.5 rounded-sm bg-indigo-600 opacity-80">
                    <Bot
                      size={12}
                      strokeWidth={2}
                      className="text-ink-primary"
                    />
                  </div>
                  <span className="text-ink-secondary text-[11px] leading-2.75 font-medium">
                    Agent
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col gap-4 flex-1 w-3/4 h-full bg-surface-quaternary/60 px-4 pt-2 pb-4 border border-line-translucent rounded-sm"
            style={{
              backgroundImage:
                "radial-gradient(rgb(40 40 40) 1px, transparent 1px)",
              backgroundSize: "14px 14px",
            }}
          >
            <div className="flex flex-col gap-4 flex-1">
              <div className="flex justify-center items-center overflow-hidden flex-1">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-col gap-1.5 p-2 rounded-md bg-surface-quaternary/80 border border-line-translucent w-fit">
                    <div className="flex items-center gap-1.5">
                      <div className="p-0.5 rounded-sm bg-red-700 opacity-80">
                        <Zap
                          size={10}
                          strokeWidth={2}
                          className="text-ink-primary"
                        />
                      </div>
                      <span className="text-ink-secondary text-[9px] leading-2.75 font-bold">
                        Workflow Trigger
                      </span>
                    </div>
                  </div>
                  <span className="w-px h-6 bg-ink-quaternary" />
                  <div className="flex flex-col gap-1.5 p-2 rounded-md bg-surface-quaternary/80 border border-blue-500 w-fit">
                    <div className="flex items-center gap-1.5">
                      <div className="p-0.5 rounded-sm bg-orange-500 opacity-80">
                        <Workflow
                          size={10}
                          strokeWidth={2}
                          className="text-ink-primary"
                        />
                      </div>
                      <span className="text-ink-secondary text-[9px] leading-2.75 font-bold">
                        If Status = Active
                      </span>
                    </div>
                  </div>
                  <span className="w-px h-6 bg-ink-quaternary" />
                  <div className="flex flex-col gap-1.5 p-2 rounded-md bg-surface-quaternary/80 border border-line-translucent w-fit">
                    <div className="flex items-center gap-1.5">
                      <div className="p-0.5 rounded-sm bg-blue-700 opacity-80">
                        <Play
                          size={10}
                          strokeWidth={2}
                          className="text-ink-primary"
                        />
                      </div>
                      <span className="text-ink-secondary text-[9px] leading-2.75 font-bold">
                        Send Email
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <span className="text-[8px] leading-6 text-ink-tertiary">
            3 nodes
          </span>
          <div className="flex gap-2 cursor-default">
            <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-sm bg-surface-quaternary border border-line-translucent">
              <Download
                size={10}
                strokeWidth={2}
                className="text-ink-primary"
              />
              <span className="text-ink-primary text-[8px] leading-2 font-medium">
                Export
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-sm bg-blue-700">
              <Loader
                size={10}
                strokeWidth={2}
                className="text-ink-primary animate-spin animation-duration-[2s]"
              />
              <span className="text-ink-primary text-[8px] leading-2 font-medium">
                Deploy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
