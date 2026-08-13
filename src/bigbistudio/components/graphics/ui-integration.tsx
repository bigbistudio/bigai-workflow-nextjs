import {
  Play,
  Check,
  Info,
  RefreshCcw,
  ChevronDown,
  ChevronRight,
  Atom,
  Plug,
  ShieldCheck,
  Zap,
} from "lucide-react"

export function UIIntegration() {
  return (
    <div
      aria-hidden="true"
      className="flex flex-col gap-4 p-4 bg-surface-secondary border border-line-translucent rounded-xl mobile:h-90 max-w-lg"
    >
      <div className="flex flex-col gap-4 h-full">
        <div className="flex justify-between items-center">
          <span className="text-xs sm:text-sm font-semibold text-ink-secondary">
            Activate Your AI Agents
          </span>
        </div>

        <div className="flex flex-col mobile:flex-row gap-4 mobile:gap-0 items-stretch flex-1 overflow-hidden">
          <div className="flex flex-col gap-2 md:w-1/4 md:min-w-5 h-full">
            <div className="flex flex-col gap-1 w-full pr-2.5">
              <span className="text-ink-quaternary text-[8px] leading-2.5 font-medium pb-1.5 pl-1 pr-2">
                CRM
              </span>
              <div className="flex flex-col">
                <div className="flex items-center justify-between gap-1.5 px-2 py-1.5 rounded-sm bg-surface-quaternary">
                  <span className="text-ink-secondary text-[8px] leading-2.5 font-medium">
                    Salesforce
                  </span>
                  <Check
                    size={8}
                    strokeWidth={2}
                    className="text-ink-primary"
                  />
                </div>
                <div className="flex items-center justify-between gap-1.5 px-2 py-1.5 rounded-sm">
                  <span className="text-ink-secondary text-[8px] leading-2.5 font-medium">
                    HubSpot
                  </span>
                  <Check
                    size={8}
                    strokeWidth={2}
                    className="text-ink-primary"
                  />
                </div>
                <div className="flex items-center justify-between gap-1.5 px-2 py-1.5 rounded-sm">
                  <span className="text-ink-secondary text-[8px] leading-2.5 font-medium">
                    Pipedrive
                  </span>
                  <Info size={8} strokeWidth={2} className="text-ink-primary" />
                </div>
              </div>
              <span className="text-ink-quaternary text-[8px] leading-2.5 font-medium py-1.5 pl-1 pr-2">
                ERP
              </span>
              <div className="flex flex-col">
                <div className="flex items-center justify-between gap-1.5 px-2 py-1.5 rounded-sm">
                  <span className="text-ink-secondary text-[8px] leading-2.5 font-medium">
                    SAP
                  </span>
                  <RefreshCcw
                    size={8}
                    strokeWidth={2}
                    className="text-ink-primary"
                  />
                </div>
                <div className="flex items-center justify-between gap-1.5 px-2 py-1.5 rounded-sm">
                  <span className="text-ink-secondary text-[8px] leading-2.5 font-medium">
                    Oracle ERP
                  </span>
                </div>
              </div>
              <span className="text-ink-quaternary text-[8px] leading-2.5 font-medium py-1.5 pl-1 pr-2">
                COMMUNICATION
              </span>
              <div className="flex flex-col">
                <div className="flex items-center justify-between gap-1.5 px-2 py-1.5 rounded-sm">
                  <span className="text-ink-secondary text-[8px] leading-2.5 font-medium">
                    Slack
                  </span>
                </div>
                <div className="flex items-center justify-between gap-1.5 px-2 py-1.5 rounded-sm">
                  <span className="text-ink-secondary text-[8px] leading-2.5 font-medium">
                    Microsoft Teams
                  </span>
                </div>
                <div className="flex items-center justify-between gap-1.5 px-2 py-1.5 rounded-sm">
                  <span className="text-ink-secondary text-[8px] leading-2.5 font-medium">
                    Email Gateway
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 flex-1 md:w-3/4 h-full bg-surface-tertiary p-2.5 rounded-sm">
            <div className="flex flex-col gap-0.75 flex-1">
              <div className="flex items-center justify-between gap-1.5">
                <span className="text-ink-secondary text-xs leading-3 font-medium">
                  Salesforce
                </span>
                <div className="flex justify-center items-center gap-1.5 px-2 bg-green-600/10 rounded-full">
                  <span className="text-teal-500 text-[6px] leading-4">
                    Connected
                  </span>
                </div>
              </div>
              <span className="text-ink-quaternary text-[6px] leading-2.5 font-medium">
                Connection Status
              </span>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 px-2 py-1 bg-surface-quaternary border border-blue-500 rounded-sm">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <Atom
                        size={12}
                        strokeWidth={1.5}
                        className="text-blue-400 animate-spin animation-duration-[3s]"
                      />
                      <span className="text-ink-secondary text-[8px] leading-4">
                        Your AI Agent
                      </span>
                    </div>
                    <p className="text-ink-tertiary font-light text-[6px] leading-2.5">
                      Autonomous workflow engine
                    </p>
                  </div>
                  <ChevronRight
                    size={10}
                    strokeWidth={2}
                    className="text-ink-tertiary ml-auto"
                  />
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 bg-surface-quaternary border border-line-translucent/50 rounded-sm">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <Plug
                        size={12}
                        strokeWidth={1.5}
                        className="text-teal-600"
                      />
                      <span className="text-ink-secondary text-[8px] leading-4">
                        Salesforce
                      </span>
                    </div>
                    <p className="text-ink-tertiary font-light text-[6px] leading-2.5">
                      Live ecosystem connection
                    </p>
                  </div>
                  <ChevronRight
                    size={10}
                    strokeWidth={2}
                    className="text-ink-tertiary ml-auto"
                  />
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 bg-surface-quaternary border border-line-translucent/50 rounded-sm">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck
                        size={12}
                        strokeWidth={1.5}
                        className="text-cyan-500"
                      />
                      <span className="text-ink-secondary text-[8px] leading-4">
                        Your Business System
                      </span>
                    </div>
                    <p className="text-ink-tertiary font-light text-[6px] leading-2.5">
                      Secure API integration with zero downtime
                    </p>
                  </div>
                </div>
              </div>
              <span className="text-ink-quaternary text-[6px] leading-2.5 font-medium my-0.5">
                Configuration
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-ink-secondary font-medium text-[6px] leading-2">
                  API Endpoint
                </span>
                <div className="flex flex-col gap-1 px-1.5 py-1 bg-surface-quaternary border border-line-translucent rounded-xs">
                  <div className="flex justify-between gap-1">
                    <span className="text-ink-secondary font-medium text-[6px] leading-2">
                      https://api.salesforce.com/v1/agents
                    </span>
                  </div>
                </div>
                <span className="text-ink-secondary font-medium text-[6px] leading-2 mt-0.5">
                  Deployment Target
                </span>
                <div className="flex flex-col gap-1 px-1.5 py-1 bg-surface-quaternary border border-line-translucent rounded-xs">
                  <div className="flex justify-between gap-1">
                    <span className="text-ink-secondary font-medium text-[6px] leading-2">
                      Production
                    </span>
                    <ChevronDown
                      size={8}
                      strokeWidth={2}
                      className="text-ink-tertiary"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 mobile:grid-cols-2 gap-2.5 mt-1.5 opacity-60">
                <div className="flex justify-center items-center gap-1.5 px-1 py-0.5 bg-surface-tertiary rounded-sm">
                  <Play
                    size={8}
                    strokeWidth={1.5}
                    className="text-ink-tertiary"
                  />
                  <span className="text-ink-tertiary font-medium text-[8px] leading-4">
                    Test
                  </span>
                </div>
                <div className="flex justify-center items-center gap-1.5 px-1 py-0.5 bg-green-500/8 border border-green-500/10 rounded-sm">
                  <Zap
                    size={8}
                    strokeWidth={1.5}
                    className="text-ink-primary"
                  />
                  <span className="text-ink-primary font-medium text-[8px] leading-4">
                    Connected
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
