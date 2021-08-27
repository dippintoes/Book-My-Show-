import { Disclosure } from '@headlessui/react'
import {BiChevronUp, BiChevronDown } from "react-icons/bi";
const PlaysFilter = (props) => {
    return (
        <Disclosure>
          {({open}) => (
            <>
              <Disclosure.Button className="py-2 flex  flex-wrap gap-2 bg-gray-50">
                {open ? <BiChevronUp/> : <BiChevronDown/>}{" "}
                <span className={open ? "text-red-600" : "text-gray-700"}>{props.title}</span>
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500 bg-gray-50 py-3">
                <div className="flex items-center gap-3 flex-wrap mx-4">
                {props.tags.map((tag)=> (
                  <>
                    <div className="border-2 border-gray-200 px-3 py-2">
                  <span className="text-red-600">{tag}</span>
                </div>
                  </>
                ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      )
}

export default PlaysFilter