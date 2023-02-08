import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function Levels() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Level 100" {...a11yProps(0)} />
          <Tab label="Level 200" {...a11yProps(1)} />
          <Tab label="Level 300" {...a11yProps(2)} />
          <Tab label="Level 400" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="mb-5">
          <h2 className="font-bold mb-5 text-2xl text-primary text-center">
            {`Level 100 Courses`}
          </h2>

          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Element of Economics</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="font-bold bg-white p-4 border border-primary rounded-xl flex flex-col md:flex-row justify-center items-center md:justify-between drop-shadow-2xl">
                    <div>Element of Economics</div>
                  </div>
                  <h3 className="font-bold mt-10 text-center">
                    Download Individual Materials
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <a
                      href={'#'}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                    >
                      <span>{'Resource one'}</span>
                      <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                        <CloudDownloadIcon />
                      </span>
                    </a>
                    <a
                      href={'#'}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                    >
                      <span>{'Resource two'}</span>
                      <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                        <CloudDownloadIcon />
                      </span>
                    </a>
                    <a
                      href={'#'}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                    >
                      <span>{'Resource three'}</span>
                      <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                        <CloudDownloadIcon />
                      </span>
                    </a>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <a
                      href={'#'}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                    >
                      <span>{'Resource one'}</span>
                      <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                        <CloudDownloadIcon />
                      </span>
                    </a>
                    <a
                      href={'#'}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                    >
                      <span>{'Resource two'}</span>
                      <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                        <CloudDownloadIcon />
                      </span>
                    </a>
                    <a
                      href={'#'}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                    >
                      <span>{'Resource three'}</span>
                      <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                        <CloudDownloadIcon />
                      </span>
                    </a>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Mathematics of Economics</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="font-bold bg-white p-4 border border-primary rounded-xl flex flex-col md:flex-row justify-center items-center md:justify-between drop-shadow-2xl">
                    <div>Element of Economics</div>
                  </div>
                  <h3 className="font-bold mt-10 text-center">
                    Download Individual Materials
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <a
                      href={'#'}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                    >
                      <span>{'Resource one'}</span>
                      <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                        <CloudDownloadIcon />
                      </span>
                    </a>
                    <a
                      href={'#'}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                    >
                      <span>{'Resource two'}</span>
                      <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                        <CloudDownloadIcon />
                      </span>
                    </a>
                    <a
                      href={'#'}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                    >
                      <span>{'Resource three'}</span>
                      <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                        <CloudDownloadIcon />
                      </span>
                    </a>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <a
                      href={'#'}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                    >
                      <span>{'Resource one'}</span>
                      <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                        <CloudDownloadIcon />
                      </span>
                    </a>
                    <a
                      href={'#'}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                    >
                      <span>{'Resource two'}</span>
                      <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                        <CloudDownloadIcon />
                      </span>
                    </a>
                    <a
                      href={'#'}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                    >
                      <span>{'Resource three'}</span>
                      <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                        <CloudDownloadIcon />
                      </span>
                    </a>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Element of Economics</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="font-bold bg-white p-4 border border-primary rounded-xl flex flex-col md:flex-row justify-center items-center md:justify-between drop-shadow-2xl">
                <div>Element of Economics</div>
              </div>
              <h3 className="font-bold mt-10 text-center">
                Download Individual Materials
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource one'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource two'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource three'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource one'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource two'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource three'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Mathematics of Economics</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="font-bold bg-white p-4 border border-primary rounded-xl flex flex-col md:flex-row justify-center items-center md:justify-between drop-shadow-2xl">
                <div>Element of Economics</div>
              </div>
              <h3 className="font-bold mt-10 text-center">
                Download Individual Materials
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource one'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource two'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource three'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource one'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource two'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource three'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Element of Economics</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="font-bold bg-white p-4 border border-primary rounded-xl flex flex-col md:flex-row justify-center items-center md:justify-between drop-shadow-2xl">
                <div>Element of Economics</div>
              </div>
              <h3 className="font-bold mt-10 text-center">
                Download Individual Materials
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource one'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource two'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource three'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource one'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource two'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource three'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Mathematics of Economics</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="font-bold bg-white p-4 border border-primary rounded-xl flex flex-col md:flex-row justify-center items-center md:justify-between drop-shadow-2xl">
                <div>Element of Economics</div>
              </div>
              <h3 className="font-bold mt-10 text-center">
                Download Individual Materials
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource one'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource two'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource three'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource one'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource two'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource three'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Element of Economics</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="font-bold bg-white p-4 border border-primary rounded-xl flex flex-col md:flex-row justify-center items-center md:justify-between drop-shadow-2xl">
                <div>Element of Economics</div>
              </div>
              <h3 className="font-bold mt-10 text-center">
                Download Individual Materials
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource one'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource two'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource three'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource one'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource two'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource three'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Mathematics of Economics</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="font-bold bg-white p-4 border border-primary rounded-xl flex flex-col md:flex-row justify-center items-center md:justify-between drop-shadow-2xl">
                <div>Element of Economics</div>
              </div>
              <h3 className="font-bold mt-10 text-center">
                Download Individual Materials
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource one'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource two'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource three'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource one'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource two'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
                <a
                  href={'#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white py-2 px-4 m-3 rounded-3xl flex justify-between items-center drop-shadow-2xl"
                >
                  <span>{'Resource three'}</span>
                  <span className="bg-primary text-white text-sm rounded-2xl px-2 pb-1 ml-3">
                    <CloudDownloadIcon />
                  </span>
                </a>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </TabPanel>
    </Box>
  )
}
