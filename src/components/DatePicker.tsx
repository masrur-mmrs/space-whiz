"use client"

import React, { useState } from "react"
import { motion } from "motion/react"
import { faChevronLeft, faChevronRight, faCalendar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface DatePickerProps {
    value?: Date
    onChange?: (date: Date) => void
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const DatePicker : React.FC<DatePickerProps> = ({ value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [currentDate, setCurrentDate] = useState(value || new Date())
    const [viewDate, setViewDate] = useState(value || new Date())

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear()
        const month = date.getMonth()
        const firstDay = new Date(year, month, 1).getDay()
        const daysInMonth = new Date(year, month + 1, 0).getDate()
        const daysInPrevMonth = new Date(year, month, 0).getDate()

        const days: (number | null)[] = []

        // Previous month days
        for (let i = firstDay - 1; i >= 0; i--) {
        days.push(daysInPrevMonth - i)
        }

        // Current month days
        for (let i = 1; i <= daysInMonth; i++) {
        days.push(i)
        }

        // Next month days
        const remainingDays = 42 - days.length
        for (let i = 1; i <= remainingDays; i++) {
        days.push(i)
        }

        return days
    }

    const handlePrevMonth = () => {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))
    }

    const handleNextMonth = () => {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))
    }

    const handleDateSelect = (day: number) => {
        const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day)
        setCurrentDate(newDate)
        onChange?.(newDate)
        setIsOpen(false)
    }

    const isToday = (day: number) => {
        const today = new Date()
        return (
            day === today.getDate() &&
            viewDate.getMonth() === today.getMonth() &&
            viewDate.getFullYear() === today.getFullYear()
        )
    }

    const isSelected = (day: number) => {
        return (
            day === currentDate.getDate() &&
            viewDate.getMonth() === currentDate.getMonth() &&
            viewDate.getFullYear() === currentDate.getFullYear()
        )
    }

    const days = getDaysInMonth(viewDate)
    const firstDayOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1).getDay()

    return (
        <div className="relative items-center cursor-pointer">
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 rounded-2xl px-4 py-3 text-foreground shadow-lg border-2 border-stellar-violet transition-colors cursor-pointer"
        >
            <FontAwesomeIcon icon={faCalendar}/>
            <span className="font-medium">
            {currentDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
            })}
            </span>
        </motion.button>
            {isOpen && (
            <>
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 z-40"
                />
                <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative sm:absolute top-full mt-2 z-50 w-80 rounded-2xl bg-gradient-to-r from-accent-primary to-accent-secondary border-2 border-stellar-violet shadow-2xl overflow-hidden"
                >
                <div className="relative bg-gradient-to-r from-accent-primary to-accent-secondary p-4 border-b border-stellar-violet/40">
                    <div className="flex items-center justify-between">
                    <motion.button
                        whileHover={{ scale: 1.1, rotate: -90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handlePrevMonth}
                        className="p-2 rounded-lg"
                    >
                        <FontAwesomeIcon icon={faChevronLeft}/>
                    </motion.button>
                    <motion.div
                        key={`${viewDate.getMonth()}-${viewDate.getFullYear()}`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <div className="text-lg font-bold text-foreground">{MONTHS[viewDate.getMonth()]}</div>
                        <div className="text-sm text-muted-foreground">{viewDate.getFullYear()}</div>
                    </motion.div>

                    <motion.button
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleNextMonth}
                        className="p-2 rounded-lg hover:bg-secondary/20 transition-colors"
                    >
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </motion.button>
                    </div>
                </div>
                <div className="relative p-4">
                    <div className="grid grid-cols-7 gap-1 mb-2">
                    {DAYS.map((day) => (
                        <div key={day} className="text-center text-xs font-semibold text-muted-foreground py-2">
                        {day}
                        </div>
                    ))}
                    </div>
                    <motion.div
                    key={`${viewDate.getMonth()}-${viewDate.getFullYear()}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-7 gap-1"
                    >
                    {days.map((day, index) => {
                        const isCurrentMonth = index >= firstDayOfMonth && index < firstDayOfMonth + new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate()
                        const dayIsToday = isCurrentMonth && day !== null && isToday(day)
                        const dayIsSelected = isCurrentMonth && day !== null && isSelected(day)

                        return (
                        <motion.button
                            key={index}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.01 }}
                            whileHover={isCurrentMonth ? { scale: 1.05 } : {}}
                            whileTap={isCurrentMonth ? { scale: 0.9 } : {}}
                            onClick={() => isCurrentMonth && day !== null && handleDateSelect(day)}
                            disabled={!isCurrentMonth}
                            className={`
                            relative aspect-square rounded-lg text-sm font-medium transition-all
                            ${
                                !isCurrentMonth
                                ? "text-gray-400 cursor-not-allowed"
                                : dayIsSelected
                                    ? "bg-stellar-violet shadow-lg"
                                    : dayIsToday
                                    ? "font-semibold"
                                    : "hover:border-2 hover:border-stellar-violet"
                            }
                            `}
                        >
                            {day}
                            {dayIsSelected && (
                            <motion.div
                                layoutId="selected"
                                className="absolute inset-0 rounded-lg bg-primary -z-10"
                                initial={false}
                                transition={{
                                type: "spring",
                                damping: 10,
                                stiffness: 300,
                                }}
                            />
                            )}
                            {dayIsToday && !dayIsSelected && (
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{
                                duration: 0.2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                }}
                                className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-accent-secondary"
                            />
                            )}
                        </motion.button>
                        )
                    })}
                    </motion.div>
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10
                        }}
                        onClick={() => {
                            const today = new Date()
                            setViewDate(today)
                            setCurrentDate(today)
                            onChange?.(today)
                            setIsOpen(false)
                        }}
                    className="w-full mt-4 py-2 rounded-lg text-foreground font-medium hover:bg-stellar-violet/90 border-2 border-stellar-violet transition-all cursor-pointer"
                    >
                    Jump to Today
                    </motion.button>
                </div>
                </motion.div>
            </>
            )}
        </div>
    )
}

export default DatePicker;